import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Room } from "./pages/room";
import { Home } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
