import Apply from "./pages/Apply";
import InputForm from "./pages/InputForm";
import Resignation from "./pages/Resignation";
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <h1>Email Template</h1>

      <Routes>
        <Route path="/" element={<InputForm />} />
        <Route path="/resignation" element={<Resignation />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </div>
  );
}
