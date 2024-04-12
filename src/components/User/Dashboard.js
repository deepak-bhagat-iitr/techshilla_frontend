import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/user.module.css';
// import { useLocation } from 'react-router-dom';
function Dashboard() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('helper')) || {});

  const {name}=userData;
  // const location = useLocation()
  return (
    <>
      <main className={styles.container}>
        <h1>Greetings, {name}!</h1>

        <p>Welcome, brave soul, to the mystical realm of Mediment Pharmacy! Prepare to embark on a wondrous journey toward health and vitality.</p>
      </main>

      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles["section-title"]}>How Can We Help You Today?</h2>
          <div className={styles["section-content"]}>
            <h3>Prescriptions Made Easy</h3>
            <ul>
              <li>Hassle-free refill options</li>
              <li>Doorstep delivery for your convenience</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles["section-content"]}>
            <h3>Health Essentials at Your Fingertips</h3>
            <ul>
              <li>Browse a wide range of over-the-counter products</li>
              <li>Expert guidance available from our pharmacists</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles["section-content"]}>
            <h3>Personalized Care, Just for You</h3>
            <ul>
              <li>Schedule a consultation with our caring pharmacists</li>
              <li>Receive tailored advice and support for your health needs</li>
            </ul>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles["footer-content"]}>
          <ul className={styles["footer-nav"]}>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
          </ul>
          <p className={styles.footerText}>Copyright ©2024 MediMent Pharmacy. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Dashboard;
