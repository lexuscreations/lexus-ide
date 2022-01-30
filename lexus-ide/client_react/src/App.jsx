import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/shared/Navigation";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
// import BookPage from "./pages/BookPage";
// import BooksPage from "./pages/BooksPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutPage />} />
        {/* <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/books" exact element={<BooksPage />} />
        <Route exact path="/books/:id" element={<BookPage />} /> */}
        <Route exact path="/notfound" element={<NotFound />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
