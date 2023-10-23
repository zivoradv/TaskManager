import React, { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import { TaskContext } from "@/context/TaskContext";

const Task = ({ task, index }) => {
  const { deleteTask, setTaskStatus } = useContext(TaskContext);

  const handleDelete = async () => {
    try {
      deleteTask(task.id);
      toast.success("TempTask deleted successfully");
    } catch (error) {
      toast.error("Error deleting task");
    }
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
      <h3 className="task-title">{index + 1}.</h3>
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
      </div>
    </div>
  );
};

export default Task;
