import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../styles/user.module.css';
import Dashboard from './Dashboard';
import Profile from './Profile';
import ContactForm from './ContactForm';
import Medicine from './OrderMedicines';
import axios from 'axios';
import OrderStatus from './OrderStatus';

function App() {
  const location = useLocation();
  const [user, setUser] = useState([]);
  const [Component, setComponent] = useState(null); // Change initial state to null

  useEffect(() => {
    // Check if user data exists in local storage
    const userDataFromLocalStorage = localStorage.getItem('helper');
    if (userDataFromLocalStorage) {
      // User data already exists in local storage, set it to the state
      setUser(JSON.parse(userDataFromLocalStorage));
      // Set the initial component based on user data
      setComponent(<Dashboard dashboard={JSON.parse(userDataFromLocalStorage)} />);
    } else {
      // User data doesn't exist in local storage, fetch it from the server
      axios.get("http://localhost:5000/users")
        .then((res) => {
          // Filter the user data based on the current user's name
          const filteredUser = res.data.filter(item => item.name === location.state.name);
          // Set the filtered user data to the state
          setUser(filteredUser);
          // Save the user data in local storage
          localStorage.setItem('helper', JSON.stringify(filteredUser));
          // Set the initial component based on user data
          setComponent(<Dashboard dashboard={filteredUser} />);
        })
        .catch(err => {
          console.log(err);
          // Handle error if needed
        });
    }
  }, []); // Fetch data when location.state.name changes

  return (
    <>
      <header id='home' className={styles.header}>
        <div className={styles.nav_container}>
          <nav>
            <div className={styles.logo}>
              <img src="apollo-pharmacy-logo.png" alt="MediMent Pharmacy Logo" className={styles.logoImg} />
            </div>
            <ul className={styles["navlinks"]}>
              <li onClick={() => setComponent(<Dashboard dashboard={user} />)}>Dashboard</li>
              <li onClick={() => setComponent(<Profile profile={user} />)}>Profile</li>
              <li onClick={() => setComponent(<Medicine />)}>Order Medicines</li>
              <li onClick={() => setComponent(<OrderStatus />)}>Order Status</li>
              <li onClick={() => setComponent(<ContactForm />)}>Contact Us</li>
            </ul>
            <div>
              <Link to="/logout" className={styles.ctabtn}>Logout</Link>
            </div>
          </nav>
        </div>
      </header>

      {Component}
    </>
  );
}

export default App;
