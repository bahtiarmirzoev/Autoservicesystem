import "./App.css";

import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="ml-64 p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to my website</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
}

export default App;
