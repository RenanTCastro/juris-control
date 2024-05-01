import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dasboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
