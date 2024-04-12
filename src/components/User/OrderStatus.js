import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/orderstatus.module.css';

const OrderStatus = () => {
    const [orders, setOrders] = useState([]);
    const username = localStorage.getItem('username');
    useEffect(() => {
        axios.get(`http://localhost:5000/medicines/${username}`)
            .then(res => {
                const fetchedOrders = res.data.map(item => ({
                    name: item.name,
                    image: item.image,
                    status: "Order Placed" // Initial status
                }));
                setOrders(fetchedOrders);
            })
            .catch(err => {
                console.log(err);
            });
    }, [username]); // Fetch orders whenever username changes

    const generateRandomStatus = () => {
        const statuses = ['Order Placed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered'];
        return statuses[Math.floor(Math.random() * statuses.length)];
    };

    useEffect(() => {
        const interval = setInterval(() => {
            // Update the status for each order
            const updatedOrders = orders.map(order => ({
                ...order,
                status: generateRandomStatus() // Generate a random status
            }));
            setOrders(updatedOrders);
        }, 10000); // Update status every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval
    }, [orders]); // Run only when orders change

    // Function to generate a random status

    return (
        <div className={styles.container}>
            {orders.map((order, index) => (
                <OrderCard key={index} {...order} />
            ))}
        </div>
    );
}

const OrderCard = ({ name, image, status }) => {
    return (
        <div className={styles.order}>
            <img src={image} alt="Product Image" className={styles.productImage} />
            <div className={styles.orderDetails}>
                <div className={styles.orderName}>{name}</div>
                <div className={styles.orderStatus}>{status}</div>
            </div>
        </div>
    );
}

export default OrderStatus;
