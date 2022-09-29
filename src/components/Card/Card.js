import React from "react";

import "./Card.css";

const Card = ({ card, handleAddToCart }) => {
  const { name, id, img, time } = card;

  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-info">
        <p className="card-name">{name}</p>
        <p>Time required: {time}s </p>
      </div>
      <button onClick={() => handleAddToCart(card)} className="btn-card">
        <p className="btn-text">Add To List</p>
      </button>
    </div>
  );
};

export default Card;
