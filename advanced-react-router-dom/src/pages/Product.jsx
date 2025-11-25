import React from "react";
import { Link, Outlet } from "react-router-dom";
import Men from "./Men";


const Contact = () => {
  return (
    <div className="text-white">
      <div className="flex m-5  justify-center items-center gap-5 text-2xl font-semibold">
       
        <Link to="/product/men">Men</Link>

        <Link to="/product/women">Women</Link>

        <Link to="/product/kids">Kids</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Contact;
