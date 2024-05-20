import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Experiences from "./pages/Experiences/Experiences";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Experiences />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
