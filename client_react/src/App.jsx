import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/shared/Navigation";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/error/NotFound";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/notfound" element={<NotFound />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
