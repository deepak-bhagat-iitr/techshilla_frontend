import React, { useState, useEffect } from 'react';
import styles from '../../styles/profile.module.css';
import axios from 'axios'; // Import Axios for making HTTP requests

const Profile = () => {
  // Step 1: Get data from local storage and store in state
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('helper')) || {});

  // Step 2: Destructure name, email, and telephone from userData
  const { name, email, telephone } = userData;

  // State variables to track edit mode for each field
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);

  // State variables to hold the edited values
  const [editedName, setEditedName] = useState(name || '');
  const [editedEmail, setEditedEmail] = useState(email || '');
  const [editedPhone, setEditedPhone] = useState(telephone || '');

  // Function to handle profile editing
  const handleEdit = (field) => {
    // Toggle edit mode for the corresponding field
    if (field === 'name') setEditName(!editName);
    else if (field === 'email') setEditEmail(!editEmail);
    else if (field === 'phone') setEditPhone(!editPhone);
  };

  // Function to handle saving changes
  const handleSave = (field) => {
    // Step 3: Make API call to update profile data
    axios.put(`https://techshilla-backend.onrender.com/user/${name}`, {
      name: editedName,
      email: editedEmail,
      telephone: editedPhone
    })
      .then(response => {
        console.log('Profile updated successfully:', response.data);
        // Step 4: Update local storage with new user data
        const updatedUserData = { ...userData, name: editedName, email: editedEmail, telephone: editedPhone };
        localStorage.setItem('helper', JSON.stringify(updatedUserData));
        // Disable edit mode after saving changes
        if (field === 'name') setEditName(false);
        else if (field === 'email') setEditEmail(false);
        else if (field === 'phone') setEditPhone(false);
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className={styles.container}>
      <h1>Profile</h1>
      <div className={styles.profileInfo}>
        <label htmlFor="name">Name:</label>
        {editName ? (
          <input type="text" id="name" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
        ) : (
          <span id="name">{editedName}</span>
        )}
        <button className={styles.editButton} onClick={() => editName ? handleSave('name') : handleEdit('name')}>
          {editName ? 'Save' : 'Edit'}
        </button>
      </div>
      <div className={styles.profileInfo}>
        <label htmlFor="email">Email:</label>
        {editEmail ? (
          <input type="email" id="email" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} />
        ) : (
          <span id="email">{editedEmail}</span>
        )}
        <button className={styles.editButton} onClick={() => editEmail ? handleSave('email') : handleEdit('email')}>
          {editEmail ? 'Save' : 'Edit'}
        </button>
      </div>
      <div className={styles.profileInfo}>
        <label htmlFor="phone">Phone Number:</label>
        {editPhone ? (
          <input type="tel" id="phone" value={editedPhone} onChange={(e) => setEditedPhone(e.target.value)} />
        ) : (
          <span id="phone">{editedPhone}</span>
        )}
        <button className={styles.editButton} onClick={() => editPhone ? handleSave('phone') : handleEdit('phone')}>
          {editPhone ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default Profile;
