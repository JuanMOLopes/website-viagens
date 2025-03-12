import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Oz from "./pages/Oz";
import Cidadela from "./pages/Cidadela";
import GravityFalls from "./pages/GravityFalls";
import TerraMedia from "./pages/TerraMedia";
import AdventureTime from "./pages/HoraDeAventura";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oz" element={<Oz />} />
        <Route path="/cidadela" element={<Cidadela />} />
        <Route path="/gravityfalls" element={<GravityFalls />} />
        <Route path="/terramedia" element={<TerraMedia />} />
        <Route path="/Adventure" element={<AdventureTime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;