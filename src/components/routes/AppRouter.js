import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Blog from '../pages/Blog';
import ContactUs from '../pages/ContactUs';
import Explore from '../pages/Explore';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer'
import Aboutus from '../pages/Aboutus';
const AppRouter = () => {
  return <div>
  
<Router>
<Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route  path="/about-us" element={<Aboutus/>}/>
        <Route  path="/services" element={<Services/>}/>
        <Route  path="/explores" element={<Explore/>}/>
        <Route  path="/blogs" element={<Blog/>}/>
        <Route  path="/contact" element={<ContactUs/>}/>
    </Routes>
    <Footer/> 
</Router>

  </div>;
};

export default AppRouter;
