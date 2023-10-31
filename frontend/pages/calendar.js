import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "@/components/header";
import Cookies from "js-cookie";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "@/styles/styles.css"
const TaskCalendar = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tooltipContent, setTooltipContent] = useState("");
  const username = Cookies.get("username");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (username) {
          const response = await fetch(`http://localhost:5000/tasks/${username}`);
          const data = await response.json();
          setTasks(data);
        } else {
          const response = await fetch(`http://localhost:5000/tempTasks`);
          const data = await response.json();
          setTasks(data);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, [username]);

  const taskDates = tasks.map((task) => new Date(task.due_date).toDateString());

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateString = date.toDateString();
      const dateIsMarked = taskDates.includes(dateString);

      return dateIsMarked ? (
        <div
          key={dateString}
          style={{
            position: "relative",
            zIndex: 1,
          }}
          onMouseEnter={() => handleTooltip(dateString)}
          onMouseLeave={() => setTooltipContent("")}
        >
          <div
            style={{
              position: "absolute",
              top: "-10px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "30px",
              height: "30px",
              backgroundColor: "yellow",
              borderRadius: "50%",
              zIndex: -1,
              opacity: "0.5",
            }}
            className="my-anchor-element"
          ></div>
        </div>
      ) : 
      <div
          key={dateString}
          style={{
            position: "relative",
            zIndex: 1,
          }}
          onMouseEnter={() => handleTooltip(dateString)}
          onMouseLeave={() => setTooltipContent("")}
        >
          <div
            style={{
              position: "absolute",
              top: "-10px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              zIndex: -1,
              opacity: "0.5",
            }}
            className="my-anchor-element"
          ></div>
        </div>;
    }
  };

  const handleTooltip = (dateString) => {
    const tasksForDate = tasks.filter(
      (task) => new Date(task.due_date).toDateString() === dateString
    );

    if (tasksForDate.length > 0) {
      const formattedTasks = tasksForDate.map((task, index) => {
        return (
          <React.Fragment key={index}>
            <p>
              Title: {task.title}
              <br />
            </p>
            <hr />
          </React.Fragment>
        );
      });

      const tooltipText = (
        <div>
          <p>Tasks for this date</p>
          <hr />
          {formattedTasks}
        </div>
      );

      setTooltipContent(tooltipText);
    } else {
      setTooltipContent("No tasks for this date");
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
            className="calendar"
          />
          <Tooltip anchorSelect=".my-anchor-element">{tooltipContent}</Tooltip>
        </div>
      </div>
    </div>
  );
};

export default TaskCalendar;
