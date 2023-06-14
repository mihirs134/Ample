import { Fragment, useState } from "react";
import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "C:/Users/mihir/.vscode/amplewebsite/node_modules/react-router-dom";

import Home from "./components/Navbar/pages/home";
import About from "./components/Navbar/pages/about";
import Issue from "./components/Navbar/pages/issue";
import Programs from "./components/Navbar/pages/programs";
import Action from "./components/Navbar/pages/action";
import Resources from "./components/Navbar/pages/resources";
import YouCanHelp from "./components/Navbar/pages/youcanhelp";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Programs" element={<Programs />} />
          <Route path="/action" element={<Action />} />
          <Route path="/youcanhelp" element={<YouCanHelp />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/issue" element={<Issue />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
