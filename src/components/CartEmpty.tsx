import React from "react";
import { Link } from "react-router-dom";
import cartEmptyImg from "../assets/empty-cart.png";

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Cart is empty <span>😕</span>
    </h2>
    <p>
      It seems that you didn't choose your pizza
      <br />
      To choose pizza, check the main page
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Get back</span>
    </Link>
  </div>
);
