import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";
import './App.css'

const App = () => {
  return (
    <div className="wrapper">
      <h1 className="head">Our Testimonials</h1>
      <div className="line"></div>
      <Testimonials reviews={reviews} />
    </div>
  );
};

export default App;
