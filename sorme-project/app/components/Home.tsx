import React from "react";
import Header from "./header";
import Slider from "./slider/slider";
import Image_row from "./Image_row";
import Product_offer from "./product_Offer/product_offer";
import Articel from "./articel";
import Contact_suport from "./contact_suport";
import Footer from "./footer";
import NextBreadcrumb from "./NextBreadcrumb";

const Home = () => {
  return (
    <main className="w-full h-screen relative ">
      {/*-------header---------- */}
      <Header />
      {/* ------slider---------- */}
      <Slider />
      {/* ------img-articel---------- */}
      <Image_row />
      {/* -------Product-slider--------- */}
      <Product_offer />
      {/* -------main-articel-------- */}
      <Articel />
      {/* --------contact-support------- */}
      <Contact_suport />
      {/* --------footer----------- */}

      <Footer />
    </main>
  );
};

export default Home;
