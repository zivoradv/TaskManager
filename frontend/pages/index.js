import TaskList from "@/components/TaskList";
import React from "react";
import Header from "@/components/header";
import { TaskContextProvider } from "@/context/TaskContext";
import '../styles/styles.css'
import CreateTask from "./createTask";

const TaskManager = () => {
  return (
    <TaskContextProvider>
      <div className="app">
      <Header />
      <TaskList />
    </div>
    </TaskContextProvider>
    
  );
};

export default TaskManager;
