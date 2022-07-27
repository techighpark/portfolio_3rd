import About from "@pages/About";
import Components from "@pages/Components";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Works from "@pages/Works";
import { HelmetProvider } from "react-helmet-async";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="components" element={<Components />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
