import { Link, Outlet } from "react-router-dom";

const Works = () => {
  return (
    <div className="font-extrabold">
      Works
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/components">Components</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Works;
