import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Index from "./Components/Index";
import About from "./Components/About";
import Contact from "./Components/Contact";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/index" element={<Index />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
