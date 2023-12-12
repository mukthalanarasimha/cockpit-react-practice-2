import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./login_folder/login";
import { Dashboard } from "./dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
