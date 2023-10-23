import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'; 

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); 

  useEffect(() => {
    const usernameFromCookie = Cookies.get('username');
    if (usernameFromCookie) {
      setFormData({
        ...formData,
        username: usernameFromCookie,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginUser = {
      username: formData.username,
      password: formData.password,
    };

    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginUser),
    })
      .then((response) => {
        if (response.ok) {
          Cookies.set('loggedIn', 'true');
          Cookies.set('username', formData.username);
          return response.json();
        } else {
          throw new Error('Failed to log in user');
        }
      })
      .then((data) => {
        console.log('User logged in successfully:', data);
        alert('Logged in successfully!');
        router.push('/profile');
      })
      .catch((error) => {
        console.error('Error logging in user:', error);
        setErrorMessage('Incorrect username or password');
      });
  };

  return (
    <div>
      <Header />
      <div className="registration-form-container">
        <form onSubmit={handleSubmit} className="registration-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
