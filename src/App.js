import React from "react";
import "../assets/css/style.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
// import '../assets/vendor/boxicons/css/boxicons.min.css';
import "../assets/vendor/glightbox/css/glightbox.min.css";
// import 'https://unpkg.com/swiper/swiper-bundle.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Body />
      </div>
    </BrowserRouter>
  );
}
