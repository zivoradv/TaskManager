import React, { useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    border: "none",
    backgroundColor: "#333",
    color: "white",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

const EditTask = ({ task, isOpen, onRequestClose, onSave }) => {
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
  });

  const handleSave = () => {
    try {
      onSave(task.id, editedTask);
      setEditedTask(false);
      toast.success("Successfully updated task");
    } catch (error) {
      toast.error("Error updating task");
    }

    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customModalStyles}
      contentLabel="Edit Task Modal"
      ariaHideApp={false}
    >
      <h2>Edit Task</h2>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          value={editedTask.title}
          onChange={(e) =>
            setEditedTask({ ...editedTask, title: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Descripton:</label>
        <textarea
          value={editedTask.description}
          onChange={(e) =>
            setEditedTask({ ...editedTask, description: e.target.value })
          }
        />
      </div>
      <div className="button-group">
        <button type="submit" className="submit-button" onClick={handleSave}>
          Save
        </button>
        <button
          type="submit"
          className="submit-button"
          onClick={onRequestClose}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default EditTask;
