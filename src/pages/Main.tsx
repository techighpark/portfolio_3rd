import Footer from "@components/layout/Footer";
import HorizontalLayout from "@components/layout/HorizontalLayout";
import { useRef } from "react";
import About from "./About";
import Components from "./Components";
import Home from "./Home";
import Works from "./Works";

const Main = () => {
  const scrollRef = useRef<HTMLDivElement[]>([]);

  return (
    <HorizontalLayout>
      <Home ref={scrollRef} />
      <About ref={scrollRef} />
      <Works ref={scrollRef} />
      <Components ref={scrollRef} />
      <Footer ref={scrollRef} />
    </HorizontalLayout>
  );
};

export default Main;
