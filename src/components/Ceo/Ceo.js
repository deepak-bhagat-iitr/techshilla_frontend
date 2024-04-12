// App.js
import React from 'react';
import styles from '../../styles/ceo.module.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles["header_container"]}>
          <div className={styles.logo}>
            <img src="logo.png" alt="Company Logo" />
          </div>
          <nav>
            <ul>
              <li><Link to="/ceo">Dashboard</Link></li>
              <li><Link to="/ceo/workers">Workers</Link></li>
              <li><Link to="/ceo/inventory">Inventory</Link></li>
            </ul>


          </nav>
          <div>

            <a href="/logout" className={styles.ctabtn}>Logout</a>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Welcome to CEO Dashboard</h1>
          <p>Streamline your operations, oversee your workforce, and manage inventory effectively.</p>
        </div>
      </section>
      <hr></hr>
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2>Testimonials</h2>
          <div className={styles.testimonial}>
            <img src="images/testimonial1.jpg" alt="Avatar 1" />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
            <h3>John Doe</h3>
            <span>CEO, Company Name</span>
          </div>
          <div className={styles.testimonial}>
            <img src="images/testimonial2.jpg" alt="Avatar 2" />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
            <h3>Jane Smith</h3>
            <span>Manager, Company Name</span>
          </div>
        </div>
      </section>
      <hr></hr>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerLinks}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className={styles.footerSocial}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.container}>
            <p>&copy; 2024 CEO Dashboard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
