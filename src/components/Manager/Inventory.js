import React, { useState } from 'react';
import styles from '../../styles/inventory.module.css';

const InventoryOverview = () => {
    const [inventoryItems, setInventoryItems] = useState([
        { name: 'Medicine 1', category: 'Electronics', quantity: 10, status: 'In Stock' },
        { name: 'Medicine 2', category: 'Electronics', quantity: 10, status: 'In Stock' },
        { name: 'Medicine 3', category: 'Electronics', quantity: 10, status: 'In Stock' },
        { name: 'Medicine 4', category: 'Electronics', quantity: 10, status: 'In Stock' },
        { name: 'Medicine 5', category: 'Clothing', quantity: 10, status: 'Low Stock' }
    ]);

    const handleIncrement = (index) => {
        const updatedItems = [...inventoryItems];
        updatedItems[index].quantity += 1;
        setInventoryItems(updatedItems);
    };

    const handleDecrement = (index) => {
        const updatedItems = [...inventoryItems];
        if (updatedItems[index].quantity > 0) {
            updatedItems[index].quantity -= 1;
            setInventoryItems(updatedItems);
        }
    };

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

            <section className={styles["inventory-overview"]}>
                <div className={styles.container}>
                    <h2>Inventory Overview</h2>
                    <div className={styles["inventory-items"]}>
                        {inventoryItems.map((item, index) => (
                            <div className={styles["inventory-item"]} key={index}>
                                <img src={`../images/medicine${index + 1}.jpg`} alt={`Medicine ${index + 1}`} />
                                <div className={styles.inventoryDetails}>
                                    <h3>{item.name}</h3>
                                    <p>Category: {item.category}</p>
                                    <p>Quantity: <span className={styles.quantity}>{item.quantity}</span></p>
                                    <p>Status: {item.status}</p>
                                    <button className={styles["quantity-control"]} onClick={() => handleIncrement(index)}>+</button>
                                    <button className={styles["quantity-control"]} onClick={() => handleDecrement(index)}>-</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default InventoryOverview;