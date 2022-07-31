import LinkText from "@components/element/LinkButton";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex gap-x-3 justify-center">
      <Link to="/">
        <LinkText text="Main" />
      </Link>
      <Link to="/works">
        <LinkText text="About" />
      </Link>
      <Link to="/components">
        <LinkText text="Works" />
      </Link>
      <Link to="/about">
        <LinkText text="Components" />
      </Link>
    </nav>
  );
};

export default Nav;
