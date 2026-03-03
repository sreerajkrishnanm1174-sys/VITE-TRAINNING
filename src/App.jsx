import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home_page from "./pages/home/Home_page";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Home_page/>} />
    </Routes>
  
  );
}

export default App; 
