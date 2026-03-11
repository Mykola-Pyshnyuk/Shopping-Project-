import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./compositions/components/Header";
import Footer from "./compositions/components/Footer";
import Store from "./compositions/pages/Store";
import Favorites from "./compositions/pages/Favorites";
import Shopping from "./compositions/pages/Shopping";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Shopping" element={<Shopping />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
