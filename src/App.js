import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Content from "./jsxComponent/Content";
import Footer from "./jsxComponent/Footer";
import Header from "./jsxComponent/Header";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
          
        <Route path="/path2" element={<h1>Hello</h1>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
