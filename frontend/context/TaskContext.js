import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {

    const username = Cookies.get('username');

    if(!username){
      try {
        const response = await fetch("http://localhost:5000/tempTasks");
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    else{
      try {
        const response = await fetch(`http://localhost:5000/tasks/${username}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const deleteTask = async (TaskId) => {
    const username = Cookies.get('username');

    if(!username){
    try {
      const response = await fetch(`http://localhost:5000/tempTasks/${TaskId}`, 
      {
        method: "DELETE",
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      fetchTasks();
    } catch (error) {
      console.error("Error:", error);
    }
  }
  else{
    try {
      const response = await fetch(`http://localhost:5000/tasks/${TaskId}`, 
      {
        method: "DELETE",
      });
      console.log(TaskId)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      fetchTasks();
    } catch (error) {
      console.error("Error:" + " " + tempTaskId, error);
    }
  }
  };

  const setTaskStatus = async (TaskId) => {
    const username = Cookies.get('username');

    if(!username){
    try {
      const response = await fetch(`http://localhost:5000/tempTasks/setStatus/${TaskId}`, 
      {
        method: "PUT",
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      fetchTasks();
    } catch (error) {
      console.error("Error:", error);
    }
  }
  else{
    try {
      const response = await fetch(`http://localhost:5000/tasks/setStatus/${TaskId}`, 
      {
        method: "PUT",
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      fetchTasks();
    } catch (error) {
      console.error("Error:", error);
    }
  }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, setTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};