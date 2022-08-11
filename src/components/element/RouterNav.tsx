import { NavLink } from "react-router-dom";

const RouterNav = (props: any, ref: any) => {
  return (
    <div>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/works">Works</NavLink>
    </div>
  );
};

export default RouterNav;
