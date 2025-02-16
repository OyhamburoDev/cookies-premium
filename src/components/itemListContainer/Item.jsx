import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, title, price, image, stock }) => {
  return (
    <div className="cnt-item">
      <img className="img-item" src={image} alt={title} />
      <div className="info-item">
        <h2 className="title-item">{title}</h2>
        <p className="price-item">${price}</p>
        <p className="stock-item">Stock: {stock}</p>
        <Link to={`/detalles/${id}`} className="link-item">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
