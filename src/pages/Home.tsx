import Layout from "@components/layout/Layout";
import About from "./About";
import Components from "./Components";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <About /> 
      <Components/>
      <div id="/main">main</div>
      <div  className="h-full w-full">
        <div className="font-mono text-[5rem] font-extrabold">
          Web Developer
        </div>
      </div>
    </Layout>
  );
};

export default Home;
