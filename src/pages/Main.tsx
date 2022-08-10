import Footer from "@components/layout/Footer";
import HorizontalLayout from "@components/layout/HorizontalLayout";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import About from "./About";
import Components from "./Components";
import Home from "./Home";
import Loading from "./Loading";
import Works from "./Works";

const Main = () => {
  const pageRef = useRef([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const time1 = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(time1);
  }, []);
  return (
    <HorizontalLayout>
      {!loading ? (
        <Loading />
      ) : (
        <>
          <Home ref={pageRef} />
          <About ref={pageRef} />
          <Works ref={pageRef} />
          <Components ref={pageRef} />
          <Footer ref={pageRef} />
        </>
      )}
    </HorizontalLayout>
  );
};

export default Main;
