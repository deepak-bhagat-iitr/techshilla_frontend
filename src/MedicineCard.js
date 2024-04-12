import React from 'react';

const MedicineCard = ({ medicine, addToCart }) => {
  return (
    <div className="medicine-card">
      <h3>{medicine.name}</h3>
      <p>Price: ${medicine.price}</p>
      <p>Description: {medicine.description}</p>
      <button onClick={() => addToCart(medicine)}>Add to Cart</button>
    </div>
  );
};

export default MedicineCard;
