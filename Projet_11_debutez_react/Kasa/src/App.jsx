import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/Aboutpage";
import ErrorPage from "./pages/ErrorPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Details/:id" element={<DetailPage />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

