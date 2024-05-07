import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OfferTemplate from "./pages/Offer/OfferTemplate1";
import EditTemplate from './pages/EditTemplate';
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates/:template" element={<EditTemplate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
