import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageAuth from "./Pages/PageAuth";
import PageLogin from "./Pages/PageLogin";
import PageDashboard from "./Pages/PageDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/auth/*" element={<PageAuth />} />
        <Route path="/dashboard/*" element={<PageDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
