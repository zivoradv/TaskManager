import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "@/components/header";
import Cookies from "js-cookie";

const TaskCalendar = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const username = Cookies.get("username");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`http://localhost:5000/tasks/${username}`);
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [username]);

  const taskDates = tasks.map(task => new Date(task.due_date).toDateString());
  
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateString = date.toDateString();
      const dateIsMarked = taskDates.includes(dateString);
      
      return dateIsMarked ? (
        <div
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '30px',
              height: '30px',
              backgroundColor: 'yellow',
              borderRadius: '50%',
              zIndex: -1,
              opacity: "0.5", 
            }}
          ></div>
        </div>
      ) : null;
    }
  };

  const onChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Calendar
            onChange={onChange}
            value={selectedDate}
            tileContent={tileContent}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCalendar;
