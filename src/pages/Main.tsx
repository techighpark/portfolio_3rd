import HorizontalLayout from "@components/layout/HorizontalLayout";
import About from "./About";
import Components from "./Components";
import Home from "./Home";
import Works from "./Works";

const Main = () => {
  return (
    <HorizontalLayout pageTitle="Main">
      <Home />
      <About />
      <Works />
      <Components />
    </HorizontalLayout>
  );
};

export default Main;
