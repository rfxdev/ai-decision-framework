import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFoundPage from "@/pages/NotFoundPage";
import StartPage from "@/pages/StartPage";

import "./index.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
