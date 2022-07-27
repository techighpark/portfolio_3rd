import About from "@pages/About";
import Components from "@pages/Components";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Works from "@pages/Works";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="works" element={<Works />}>
          <Route path="about" element={<About />}></Route>
          <Route path="components" element={<Components />}></Route>
        </Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
