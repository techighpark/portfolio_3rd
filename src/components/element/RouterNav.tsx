import { NavLink } from "react-router-dom";

const RouterNav = (props: any, ref: any) => {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/works"}>Works</NavLink>
      <NavLink to={"/components"}>components</NavLink>
    </div>
  );
};

export default RouterNav;
