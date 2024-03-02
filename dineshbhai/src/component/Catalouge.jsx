import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import Whatsapp from "./Whatsapp";
import Calllogo from "./Calllogo";


const Catalouge = () => {
  return (
    <div className="container">
      <ScrollToTopButton />
      <Calllogo />
      <Whatsapp />
    </div>
  );
};

export default Catalouge;
