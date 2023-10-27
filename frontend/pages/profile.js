import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import Cookies from "js-cookie";
import "../styles/styles.css";
import Link from "next/link";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [TaskCount, setTaskCount] = useState(0);
  useEffect(() => {
    const username = Cookies.get("username");
    if (username) {
      fetch(`http://localhost:5000/user/${username}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch user information");
          }
        })
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user information:", error);
        });

      fetch(`http://localhost:5000/tasks/count/${username}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch task count");
          }
        })
        .then((data) => {
          // Assuming the API returns the task count as "taskCount" in the response data
          const taskCount = data.taskCount;
          setTaskCount(taskCount);
        })
        .catch((error) => {
          console.error("Error fetching task count:", error);
        });
    }
  }, []);

  const handleLogOut = () => {
    Cookies.remove("loggedIn");
    Cookies.remove("username");

    window.location.href = "/";
  };

  return (
    <div>
      <Header />
      <div className="profile-container">
        <h1>Profile</h1>
        {userData ? (
          <div>
            <p>
              <strong>Username:</strong> {userData.username}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Number of tasks:</strong> {TaskCount}
            </p>
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        ) : (
          <div>
            <p>
              Hello, guest! You can create, edit, and delete tasks globally,
              accessible to everyone.
            </p>
            <p>
              If you want to save your tasks and have your personalized
              experience, please <Link href="/login">Log In</Link> or{" "}
              <Link href="/register">Register</Link>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
