import React from "react";
import FlashSale from "../Components/FlashSale/Flashsale";
import TopProducts from "../Components/TopProducts/TopProducts";
import Category from "../Containers/Category/Category";
import Hero from "../Containers/Hero/Hero";
import Sale from "../Containers/Sale/SaleWallpaper";
import Modal from "../Common/Modal/Modal";
import "./Pages.css";
import FeaturedCategory from "../Containers/FeaturedCategory/FeaturedCategory";
import BestSeller from "../Containers/BestSeller/BestSeller";

export default function Home() {
  return (
    <section className="homePage">
      <Modal />
      <div className="hero_section">
        <Category />
        <Hero />
      </div>
      <div className="top_prod_sale">
        <TopProducts />
        <FlashSale />
      </div>
      <Sale />
      <FeaturedCategory />
      <BestSeller />
    </section>
  );
}
