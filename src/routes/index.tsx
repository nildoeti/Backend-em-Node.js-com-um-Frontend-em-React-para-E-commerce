import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
