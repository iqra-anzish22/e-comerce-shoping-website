import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Categroy from "./components/Categroy";
import Progresser from "./components/Progresser";
import Brands from "./components/Brands";
import Offer from "./components/Offer";
import Card from "./components/Card";

import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import { ImTab } from "react-icons/im";
import Items from "./components/items";

function page() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Carousel />
      <Categroy />

      <Items />

      <Progresser />
      <Brands />
      <Offer />
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}

export default page;
