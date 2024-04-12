import React from 'react';
import styles from '../../styles/workers.module.css';
import { Link } from 'react-router-dom';

const Workers = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <div className={styles.logo}>
            <img src="logo.png" alt="Company Logo" />
          </div>
          <nav>
            <ul>
              <li><Link to="/ceo">Dashboard</Link></li>
              <li><Link to="/ceo/workers">Workers</Link></li>
              <li><Link to="/ceo/inventory">Inventory</Link></li>
              <li><Link to="#reports">Reports</Link></li>
            </ul>
          </nav>
          <div>

<a href="/logout" className={styles.ctabtn}>Logout</a>
</div>
        </div>
      </header>

      <section className={styles['worker-overview']}>
        <div className="container">
          <h2>Worker Overview</h2>
          <div className={styles['worker-cards']}>
            <div className={styles['worker-card']}>
              <img src="worker1.jpg" alt="Worker 1" />
              <div className="worker-details">
                <h3>John Doe</h3>
                <p>Position: Manager</p>
                <p>Status: Active</p>
              </div>
            </div>
            <div className={styles['worker-card']}>
              <img src="worker2.jpg" alt="Worker 2" />
              <div className="worker-details">
                <h3>Jane Smith</h3>
                <p>Position: Sales Associate</p>
                <p>Status: On Leave</p>
              </div>
            </div>
            {/* Add more worker cards as needed */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Workers;