//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import "./App.css";
import RestaurantNavbar from "./components/RestaurantNavbar";
import AdminSection from "./components/AdminSection";
import ReservationForm from "./components/ReservationForm";
import HomeContent from "./components/HomeContent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <RestaurantNavbar />
      <AdminSection />
      <ReservationForm />
      <HomeContent />
    </>
  );
}

export default App;
