import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Character from "./pages/character";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;
