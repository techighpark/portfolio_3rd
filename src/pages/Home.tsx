import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-extrabold">
      Home
      <nav>
        <Link to="/about">
          <button> About</button>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
