//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import "./App.css";
import RestaurantNavbar from "./components/RestaurantNavbar";
import AdminSection from "./components/AdminSection";
import ReservationForm from "./components/ReservationForm";
import HomeContent from "./components/HomeContent";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import PastaDetails from "./components/PastaDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RestaurantNavbar />

      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/admin" element={<AdminSection />} />
        <Route path="/prenota" element={<ReservationForm />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/details/:pastaId" element={<PastaDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/*qui ci andrebbe il footer*/}
    </BrowserRouter>
  );
}

export default App;
