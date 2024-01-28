import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";

function Cards() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [sort, setSort] = useState(null);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function search(e) {
    setInput(e.target.value);
  }

  function lower(data) {
    if (typeof data === "string") {
      return data.toLowerCase();
    }
    return data;
  }
  return (
    <>
      <div className="containerCard">
        <div className="cardSection">
          <div className="header">
            <p>POPULAR PRODUCTS</p>
            <h1>Our Products</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Repudiandae nostrum natus excepturi fuga ullam <br />
              accusantium vel ut eveniet aut consequatur laboriosam ipsam.
            </p>
          </div>
          <div className="search">
            <input
              type="text"
              value={input}
              onChange={search}
              placeholder="Search..."
            />
          </div>

          <div className="filter">
            <button onClick={() => setSort({ property: "name", asc: true })}>
              A-Z
            </button>
            <button onClick={() => setSort({ property: "name", asc: false })}>
              Z-A
            </button>
            <button onClick={() => setSort(null)}>Default</button>
            <button onClick={() => setSort({ property: "price", asc: true })}>
              Artan
            </button>
            <button onClick={() => setSort({ property: "price", asc: false })}>
              Azalan
            </button>
          </div>

          <div className="cards">
            {products
              .filter((x) => x.name.toLowerCase().includes(input.toLowerCase()))
              .sort((a, b) => {
                if (sort && sort.asc) {
                  return lower(a[sort.property]) > lower(b[sort.property])
                    ? 1
                    : lower(b[sort.property]) > lower(a[sort.property])
                    ? -1
                    : 0;
                } else if (sort && sort.asc === false) {
                  return lower(a[sort.property]) < lower(b[sort.property])
                    ? 1
                    : lower(b[sort.property]) < lower(a[sort.property])
                    ? -1
                    : 0;
                } else {
                  return 0;
                }
              })

              .map((x) => (
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
      </div>
    </>
  );
}

export default Cards;
