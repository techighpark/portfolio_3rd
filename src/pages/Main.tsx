import Footer from "@components/layout/Footer";
import HorizontalLayout from "@components/layout/HorizontalLayout";
import { useRef } from "react";
import About from "./About";
import Components from "./Components";
import Home from "./Home";
import Works from "./Works";

const Main = () => {
  const pageRef = useRef([]);
  return (
    <HorizontalLayout>
      <Home ref={pageRef} />
      <About ref={pageRef} />
      <Works ref={pageRef} />
      <Components ref={pageRef} />
      <Footer ref={pageRef} />
    </HorizontalLayout>
  );
};

export default Main;
