import { IoMagnet } from "react-icons/io5";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="ml-64 p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to my website</h1>
        <p>This is the main content area.</p>
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
