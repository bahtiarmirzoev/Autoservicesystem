import { IoMagnet } from "react-icons/io5";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
