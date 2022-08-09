// import About from "@pages/About";
// import Components from "@pages/Components";
// import Home from "@pages/Home";
// import NotFound from "@pages/NotFound";
// import Works from "@pages/Works";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Main from "@pages/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "@pages/NotFound";
function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
