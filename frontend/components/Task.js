import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { FaTrash, FaCheck, FaTimes, FaPen } from "react-icons/fa";
import { TaskContext } from "@/context/TaskContext";
import EditTask from "@/pages/editTask";
import DeleteTask from "@/pages/deleteTask";

const Task = ({ task, index }) => {
  const { deleteTask, setTaskStatus, updateTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
  };

  const handleStatus = async () => {
    try {
      setTaskStatus(task.id);
      toast.success("Successfully changed status of a task");
    } catch (error) {
      toast.error("Error changing status of a task");
    }
  };

  return (
    <div className={task.status ? "status-tast" : "task"}>
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <p className="task-due-date">Due Date: {task.due_date}</p>
      <div>
        {task.status === 1 ? (
          <FaCheck
            className="status-button completed-button"
            onClick={handleStatus}
          />
        ) : (
          <FaTimes
            className="status-button completed-button"
            onClick={handleStatus}
          />
        )}
        <FaTrash className="delete-button" onClick={handleDelete} />
        <FaPen className="edit-button" onClick={handleEdit} />
      </div>
      {isEditing ? (
        <EditTask
          task={task}
          isOpen={isEditing}
          onRequestClose={() => setIsEditing(false)}
          onSave={updateTask}
        />
      ) : isDeleting ? (
        <DeleteTask
          task={task}
          isOpen={isDeleting}
          onRequestClose={() => setIsDeleting(false)}
          onDelete={deleteTask}
        />
      ) : null}
    </div>
  );
};

export default Task;
