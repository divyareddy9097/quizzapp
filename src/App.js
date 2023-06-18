import React, { useState } from "react";
import Login from "./components/Login";
import Quiz from "./components/Quiz";
import Appbar from "./components/Appbar";
import Addques from "./components/Addques";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import Update from "./Update";
import Start from "./components/Start";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Appbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/start" element={<Start />} />
        <Route path="/addques" element={<Addques />} />
        <Route path="/content" element={<Content />} />
        <Route path="/Update/:id" element={<Update />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/home" element={<Appbar />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
