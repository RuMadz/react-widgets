import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Widgets from "./pages/Widgets/Widgets";
import Calculator from "./Widgets/calculator/Calculator";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/widgets" element={<Widgets />} />
          <Route path="/calculator1" element={<Calculator />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
