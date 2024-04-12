// Manager.js

import React from 'react';
import styles from '../../styles/manager.module.css'; // Import CSS module
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Manager = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_container}>
                    <div className={styles.logo}>
                        <img src="logo.png" alt="Company Logo" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#dashboard">Dashboard</a></li>
                            <li><a href="#workers">Order Status</a></li>
                            <li><a href="#inventory">Inventory</a></li>
                        </ul>
                    </nav>
                    <div>
                        <a href="/logout" className={styles.ctabtn}>Logout</a>
                    </div>
                </div>
            </header>

            <section className={styles.hero}> {/* Use CSS module class */}
                <h1>Welcome Aboard, Manager!</h1>
                <p>We're excited to have you lead the team at [Store Name].</p>
                <p>[Optional: Short message highlighting manager's skills or experience]</p>
            </section>
            
            <section className={styles.focus}> {/* Use CSS module class */}
                <h2>[Manager Name]'s Vision for MediMent</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, auctor at, ornare vel, sem. Donec tellus odio, faucibus vel, auctor sit amet, aliquam eu, ipsum. Nulla facilisi. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Nullam lorem tortor, id euismod nibh semper a. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                <p>[Optional: Include a motivational quote from the managerfrontend/src/components/Ceo/Inventory.js]</p>
            </section>

            <footer className={styles.footer}> {/* Use CSS module class */}
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
        </>
    );
}

export default Manager;