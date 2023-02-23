import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage/>
          }
        />
        <Route
          path="/about"
          element={
            <Aboutpage/>
          }
        />
        <Route
          path="/contact"
          element={
            <Contactpage/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
