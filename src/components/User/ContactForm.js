import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/contactForm.module.css';
import { Link, useNavigate } from 'react-router-dom';

const ContactForm = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      axios.post("https://techshilla-backend.onrender.com/user/contact", formData).
        then(user => console.log(user))

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
     
      <div className={styles.contact_container}>
        <h2>Contact Us</h2>
        <form onSubmit={onSubmit}>
          <div className={styles["input-group"]}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={message}
              onChange={onChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
