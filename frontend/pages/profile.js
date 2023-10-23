import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import Cookies from 'js-cookie';
import '../styles/styles.css';
import Link from 'next/link';

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const username = Cookies.get('username');

    fetch(`http://localhost:5000/user/${username}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch user information');
        }
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user information:', error);
      });
  }, []);

  const handleLogOut = () => {
    Cookies.remove('loggedIn');
    Cookies.remove('username');

    window.location.href = '/';
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
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        ) : (
          <div>
            <p>Hello, guest! You can create, edit, and delete tasks globally, accessible to everyone.</p>
            <p>
              If you want to save your tasks and have your personalized experience, please{' '}
              <Link href="/login">Log In</Link> or <Link href="/register">Register</Link>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
