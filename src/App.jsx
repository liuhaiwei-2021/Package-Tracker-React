//NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
//project files
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";
import Track from "./pages/Track";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Track />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
