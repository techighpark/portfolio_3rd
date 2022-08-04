// import About from "@pages/About";
// import Components from "@pages/Components";
// import Home from "@pages/Home";
// import NotFound from "@pages/NotFound";
// import Works from "@pages/Works";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Main from "@pages/Main";
function App() {
  return (
    <HelmetProvider>
      <Main />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="components" element={<Components />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router> */}
    </HelmetProvider>
  );
}

export default App;
