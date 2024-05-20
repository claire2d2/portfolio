import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
