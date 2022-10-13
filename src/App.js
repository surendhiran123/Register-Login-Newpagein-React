import "./App.css";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/register";
import Home from "./components/home";
import Welcome from "./components/welcome";

function App() {
  return (
    <>
      <header className="App-header">
        <BrowserRouter>
          <Routes>
          <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/" element={<Welcome />} />
          </Routes>
        </BrowserRouter>
      </header>

      <div className="App"></div>
    </>
  );
}
export default App;