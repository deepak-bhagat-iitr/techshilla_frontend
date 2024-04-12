import React, { useState } from 'react';
import styles from '../../styles/medicine.module.css';
import axios from 'axios'; // Don't forget to import axios

function MedicineCard({ name, description, rating, id, src }) {
  const filledStars = '★'.repeat(rating);
  const emptyStars = '☆'.repeat(5 - rating);

  const order = (e) => {
    e.preventDefault();
    const username = localStorage.getItem('username');
    const medicineData = {
      name: name,
      image: src
    };
    axios.post(`http://localhost:5000/medicines/${username}`, medicineData) // Add username to the API URL
      .then((res) => {
        console.log('Medicine ordered successfully:', res.data);
      })
      .catch(err => {
        console.log('Error ordering medicine:', err);
      });
  };

  return (
    <div className={styles['medicine-card']}>
      <img src={`images/medicine${id}.jpg`} alt={`${name}`} className={styles['medicine-img']} />
      <h2>{`${name}`}</h2>
      <p>{description}</p>
      <div className={styles['rating']}>
        {filledStars}{emptyStars}
      </div>
      <button className={styles['add-to-cart-btn']} onClick={order}>Order</button>
    </div>
  );
}

function App() {
  const [medicines, setMedicines] = useState([
    { name: "Medicine 1", id: "1", description: "Description of Medicine 1", rating: 5, src: `images/medicine1.jpg` },
    { name: "Medicine 2", id: "2", description: "Description of Medicine 2", rating: 4, src: `images/medicine2.jpg` },
    { name: "Medicine 3", id: "3", description: "Description of Medicine 3", rating: 3, src: `images/medicine3.jpg` },
    { name: "Medicine 4", id: "4", description: "Description of Medicine 4", rating: 4, src: `images/medicine4.jpg` },
    { name: "Medicine 5", id: "5", description: "Description of Medicine 5", rating: 2, src: `images/medicine5.jpg` }
  ]);

  return (
    <div>
      <h1>Available Medicines</h1>
      <div className={styles['container']}>
        {medicines.map((medicine, index) => (
          <MedicineCard key={index} {...medicine} />
        ))}
      </div>
    </div>
  );
}

export default App;
