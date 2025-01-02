import React from "react";

import Navbar from "../app/components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import Product from "./components/Product";
import Categroy from"./components/Categroy";
import Progresser from "./components/Progresser";
 import Brands from "../app/components/Brands";
import Reservation from "./components/Reservation";
import Items from "./components/items";

export default function App() {
  return (
  <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">


<Navbar/>

<Banner/>

<Carousel/>


<Product/>
<Categroy/>

<Progresser/>

<Brands/>
<Items/>
<Offer/>
<Card/>
<Reservation/>
<Footer/>

  </div>
  );
}
