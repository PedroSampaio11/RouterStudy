import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Home } from "./Pages/Home";
import { Politicas } from "./Pages/Politicas";
import { Termos } from "./Pages/Termos";
// Config React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
export const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <BrowserRouter>
      {/* aqui ele sempre aparece em todas pages */}
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/termos" element={<Termos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
