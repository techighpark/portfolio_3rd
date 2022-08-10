import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "@pages/Main";
import NotFound from "@pages/NotFound";

function App() {
  const location = useLocation();
  return (
    <HelmetProvider>
      <Routes location={location}>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
