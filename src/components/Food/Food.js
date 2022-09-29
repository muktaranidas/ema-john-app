import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { addToDb, getStoragedcart } from "../../utilities/fakedb";
import "./Food.css";

import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Food = () => {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("cards.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoragedcart();
    console.log(storedCart);
    for (const id in storedCart) {
      const addedCard = cards.find((card) => card.id === id);
    }
  }, []);

  const handleAddToCart = (card) => {
    localStorage.setItem("time", card.time);
    // console.log()
  };

  return (
    <div className="food-container">
      <div>
        <div className="title-icon">
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          <h1 className="title">Food-Is-Your-Life</h1>
        </div>
        <h2>Select Food</h2>

        <div className="cards-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleAddToCart={handleAddToCart}
            ></Card>
          ))}
        </div>
      </div>

      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Food;
