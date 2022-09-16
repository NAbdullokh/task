import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotFound from "../page/NotFound";
import { navbarItems } from "../utils/navbarItem";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route element={<Navbar data={navbarItems} />}>
          <Route element={<Footer />}>
            {navbarItems.map((value) => {
              return <Route path={value.path} element={value.element} />;
            })}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Root;
