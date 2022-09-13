import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DAPIBUS" element={<h1>DAPIBUS</h1>} />
        <Route path="/ULTRICIES" element={<h1>ULTRICIES</h1>} />
        <Route path="/BIBENDUM" element={<h1>BIBENDUM</h1>} />
        <Route path="/MAGNA" element={<h1>MAGNA</h1>} />
        <Route path="*" element={<h1>ERROR</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
