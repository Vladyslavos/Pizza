import React from "react";
import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart";
import NotFoundBlock from "./components/NotFoundBlock/index.jsx";
import { Route, Routes } from "react-router-dom";
import { DetailedPizza } from "./pages/DetailedPizza";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFoundBlock />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<DetailedPizza />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
