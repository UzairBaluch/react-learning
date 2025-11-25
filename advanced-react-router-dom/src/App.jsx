import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";

const App = () => { 
  return (
    <div className="h-screen bg-black">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

  
        <Route path="/product" element={<Product />}>
         
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
