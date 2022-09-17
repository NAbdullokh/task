import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default Footer;
