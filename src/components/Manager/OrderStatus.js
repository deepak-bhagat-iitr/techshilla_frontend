import React from 'react';
import styles from '../../styles/orderstatus.module.css';

const OrderStatus = () => {
    return (<>
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
        <div className={styles.container}>
            <div className={styles.order}>
                <img src="https://via.placeholder.com/80" alt="Product Image" />
                <div className={styles.orderDetails}>
                    <div className={styles.orderName}>Product Name 1</div>
                    <div className={styles.orderStatus}>Order Placed</div>
                </div>
            </div>
            <div className={styles.order}>
                <img src="https://via.placeholder.com/80" alt="Product Image" />
                <div className={styles.orderDetails}>
                    <div className={styles.orderName}>Product Name 2</div>
                    <div className={styles.orderStatus}>Processing</div>
                </div>
            </div>
        </div>
    </>

    );
}

export default OrderStatus;