import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Book from "./Book";
import Favorites from "./Favorites";
import Navbar from "../components/Navbar";
import BooksProvider from "../providers/BooksProvider";

function PageRouter() {
  return (
    <BooksProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<div>404 page</div>} />
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default PageRouter;
