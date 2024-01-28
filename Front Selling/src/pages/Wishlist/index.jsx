import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/wishlistContext";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import "./style.scss"

function Wishlist() {
  const { addBasket } = useContext(BasketContext);
  const { wishlist, addRemoveWishlist, checkIsWishlist } =
    useContext(WishlistContext);
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="wishlist">
        <div className="cards">
          {wishlist.map((x) => (
            <div className="card" key={x._id}>
              <img src={x.image} alt="" />
              <h3>{x.name}</h3>
              <div className="info">
                <h4>${x.price}</h4>
                <i
                  className={`${
                    checkIsWishlist(x)
                      ? "fa-solid fa-heart"
                      : "fa-regular fa-heart"
                  }`}
                  onClick={() => addRemoveWishlist(x)}
                ></i>
              </div>
              <p>{x.desc}</p>
              <div className="buttons">
                <button className="cart" onClick={() => addBasket(x)}>
                  CART
                </button>
                <button className="cart2">
                  <NavLink to={"/detail/" + x._id}>VIEW</NavLink>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
