import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex gap-x-3 justify-center bg-red-300">
      <Link to="/">
        <div className="rounded-md p-2 shadow-md backdrop-opacity-10">Home</div>
      </Link>
      <Link to="/works">Works</Link>
      <Link to="/components">Components</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Nav;
