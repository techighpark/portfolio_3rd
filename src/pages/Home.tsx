
import Button from "@components/element/Button";
import Layout from "@components/layout/Layout";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <div>Home</div>
      <Button text="button" />
      <div className="flex items-center  w-32 h-32 border">
        <div className="w-10 h-10 border">align</div>
        <div className="w-16 h-6 border">items</div>
        <div className="w-10 h-20 border self-center">center</div>
      </div>
      <div className="flex content-end w-32 h-32 border">
        <div className="w-10 h-10 border">align</div>
        <div className="w-16 h-6 border">content</div>
        <div className="w-10 h-20 border">center</div>
      </div>
      <div className="flex w-32 h-32 border ">
        <div className="w-10 h-10 border self-center">align-self:center</div>
        <div className="w-16 h-6 border">2</div>
        <div className="w-10 h-20 border">3</div>
      </div>
    </Layout>
  );
};

export default Home;
