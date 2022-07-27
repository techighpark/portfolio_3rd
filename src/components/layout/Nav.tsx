import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/invoices">Invoices</Link>
      <Link to="/components">Components</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Nav;
