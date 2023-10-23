import React, { useState, useContext} from 'react';
import Header from '@/components/header';
import '../styles/styles.css';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const CreateTask = () => {
  const initialTask = {
    title: "",
    description: "",
    due_date: "",
  };

  const [task, setTask] = useState(initialTask);
  const username = Cookies.get("username");

  const createTempTask = async (newTask) => {

    if(!username){
      try {
        const response = await fetch('http://localhost:5000/tempTasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTask),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        toast.success("Task successfully created")
      } catch (error) {
        toast.error('Error:', error);
      }
    }
    else{
      try {
        const response = await fetch(`http://localhost:5000/tasks/${username}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTask),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        toast.success("Task successfully created")
      } catch (error) {
        toast.error('Error:', error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: task.title,
      description: task.description,
      due_date: task.due_date,
    };

    createTempTask(newTask);

    setTask(initialTask)
  };

  return (
    <div>
      <Header />
      <div className="create-task-container">
        <h2>Create a Task</h2>
        <form className="create-task-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={task.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={task.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="due_date">Due Date:</label>
            <input
              type="date"
              id="due_date"
              name="due_date"
              value={task.due_date}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-button">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
