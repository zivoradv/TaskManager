import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import '@/styles/styles.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

const Header = () => {
  const [loggedInUsername, setLoggedInUsername] = useState(null);

  useEffect(() => {
    const isLoggedIn = Cookies.get('loggedIn');
    if (isLoggedIn === 'true') {
      const usernameFromCookie = Cookies.get('username');
      setLoggedInUsername(usernameFromCookie);
    }
  }, []);

  return (
    <header className="header">
      <Head>
        <title>Task Manager application</title>
      </Head>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link href="/" className="link">
              <button className='header-button'>View Tasks</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/createTask" className="link">
              <button className='header-button'>Create Task</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register" className="link">
            <button className='header-button'>Register</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login" className="link">
            <button className='header-button'>Log in</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/profile" className="link">
            <button className='header-button'>Hello, {loggedInUsername || 'Guest'}!</button>
            </Link>
          </li>
        </ul>
      </nav>
      <ToastContainer />
    </header>
  );
};

export default Header;
