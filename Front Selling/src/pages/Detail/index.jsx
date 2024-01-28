import React, { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import "./style.scss";
import { Helmet } from "react-helmet-async";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";

function Detail() {
  const [products, setProducts] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);

  let { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:8000/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Detail Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="detail">
        <div className="card">
          <div className="image">
            <img src={products.image} alt="" />
          </div>
          <div className="infos">
            <h3>{products.name}</h3>
            <div className="info">
              <h4>${products.price}</h4>
              <i
                className={`${
                  checkIsWishlist(products)
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart"
                }`}
                onClick={() => addRemoveWishlist(products)}
              ></i>
            </div>

            <p>{products.desc}</p>
            <div className="buttons">
              <button className="cart" onClick={() => addBasket(products)}>
                CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
