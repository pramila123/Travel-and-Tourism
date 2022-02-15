import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Aboutus from "../pages/Aboutus";
import ScrollToTop from "./ScrollToTop";
import StateProvider from "../context/StateProvider";
import TourPackages from "../TourPackage/ToursPackage";

const AppRouter = () => {
  return (
    <div>
      <StateProvider>
        <Router>
          <ScrollToTop>
            <Navbar />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about-us" element={<Aboutus />} />
              <Route path="/services" element={<Services />} />
              <Route path="/explores" element={<Explore />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/package/:id" element={< TourPackages/>} />
            </Routes>
            <Footer />
          </ScrollToTop>
        </Router>
      </StateProvider>
    </div>
  );
};

export default AppRouter;
