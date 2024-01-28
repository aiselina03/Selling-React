import React from "react";
import Cards from "../../components/Cards";
import { Helmet } from "react-helmet-async";
import ShopWithUs from "../../components/ShopWithUs";
import AboutUs from "../../components/AboutUs";
import Lidership from "../../components/LiderShip";
import Services from "../../components/Services";

function Home() {
  return (
    <>
       <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="home">
        <ShopWithUs/>
        <Cards />
        <AboutUs/>
        <Lidership/>
        <Services/>
      </div>
    </>
  );
}

export default Home;
