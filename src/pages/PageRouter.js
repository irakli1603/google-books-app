import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Book from "./Book";

function PageRouter() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<div>404 page</div>} />
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default PageRouter;
