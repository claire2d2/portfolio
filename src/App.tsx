import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import Projects from "./components/Projects/Projects/Projects";
import Experiences from "./components/Experiences/Experiences";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
