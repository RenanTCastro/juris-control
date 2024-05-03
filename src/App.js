import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Demandas from "./pages/Demandas/Demandas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Demandas />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
