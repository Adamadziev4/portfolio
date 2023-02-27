import { Route, Routes } from "react-router";
import { FullProject } from "./pages/FullProject";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<FullProject />} />
      </Routes>
    </div>
  );
}

export default App;
