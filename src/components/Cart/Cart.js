import React from "react";
import "./Cart.css";

const Cart = (props) => {
  return (
    <div className="cart">
      <div className="my-info">
        <h4>Name: Mukta Thakur</h4>
        <h5>From: Dhaka, Bangladesh</h5>
      </div>

      <div>
        <h4>Add A Break</h4>
        <div className="add-a-break">
          <button>10s</button>
          <button>20s</button>
          <button>30s</button>
          <button>40s</button>
          <button>50s</button>
        </div>
      </div>
      <div className="food-details">
        <h4>Food Details</h4>
        <div className="food-details-heading">
          <h5> Time</h5>
          <h5>
            <span id="food-details-time">30</span> seconds
          </h5>
        </div>
        <div className="food-details-heading">
          <h5>BreakTime</h5>
          <h5>30seconds</h5>
        </div>
        <button className="activity-btn">Activity Completed</button>
      </div>
    </div>
  );
};

export default Cart;
