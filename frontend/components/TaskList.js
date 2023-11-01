import React, { useContext, useState } from "react";
import { TaskContext } from "@/context/TaskContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("title");
  const [sortBy, setSortBy] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchByChange = (e) => {
    setSearchBy(e.target.value);
    setSearchTerm("");
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    return task[searchBy].toLowerCase().includes(searchTerm.toLowerCase());
  });

  let displayTasks = searchTerm ? filteredTasks : tasks;

  if (sortBy === "title") {
    displayTasks = displayTasks
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "dueDate") {
    displayTasks = displayTasks
      .slice()
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  }

  return (
    <div className="task-list-container">
      <h3 >Filter search:</h3>
      <hr/>
      <div className="search-bar">
        <div className="search-section">
          <input
            type="text"
            id="searchInput"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="search-section">
          <select
            id="searchBySelect"
            value={searchBy}
            onChange={handleSearchByChange}
          >
            <option value="title">Title</option>
            <option value="description">Description</option>
          </select>
        </div>
        <div className="search-section">
          <select value={sortBy} onChange={handleSortByChange}>
            <option value="">Sort by...</option>
            <option value="title">Title</option>
            <option value="dueDate">Due Date</option>
          </select>
        </div>
      </div>
      <div className="task-list">
        {displayTasks.map((task, index) => (
          <Task key={task.id} task={task} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
