import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Book from "./Book";
import Favorites from "./Favorites";
import FavoritesProvider from "../providers/FavoritesProvider";
import Navbar from "../components/Navbar";

function PageRouter() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<div>404 page</div>} />
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default PageRouter;
