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
    padding: "50px",
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

const DeleteTaskModal = ({ task, isOpen, onRequestClose, onDelete }) => {
  const handleDelete = () => {
    try {
      onDelete(task.id);
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("Error deleting task" + error);
    }
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customModalStyles}
      contentLabel="Delete Task Modal"
      ariaHideApp={false}
    >
      <p>Are you sure you want to delete this task?</p>
      <div className="button-group">
        <button className="submit-button" onClick={handleDelete}>
          Delete
        </button>
        <button className="submit-button" onClick={onRequestClose}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeleteTaskModal;
