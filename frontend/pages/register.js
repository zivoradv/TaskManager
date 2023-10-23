import React, { useState } from 'react'
import Header from '@/components/header'
function login() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        isAdmin: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const newUser = {
            email: formData.email,
            username: formData.username,
            password: formData.password,
            isAdmin: formData.isAdmin,
        };
      
        fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Failed to create user');
            }
          })
          .then((data) => {
            console.log('User created successfully:', data);
          })
          .catch((error) => {
            console.error('Error creating user:', error);
          });
      };

    return (
        <div>
            <Header />
            <div className="registration-form-container">

                <form onSubmit={handleSubmit} className="registration-form">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

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

                    <button type="submit">Register</button>
                </form>
            </div>

        </div>
    );
}

export default login