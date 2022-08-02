import LinkBtn from "@components/element/LinkBtn";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex justify-center space-x-5 rounded-xl border bg-white px-4 pb-3 pt-2 shadow-inner drop-shadow-lg backdrop-blur-sm backdrop-opacity-30">
      <LinkBtn to="/" text="Main" active={pathname === "/" ? true : false} />
      <LinkBtn
        to="/about"
        text="About"
        active={pathname === "/about" ? true : false}
      />
      <LinkBtn
        to="/works"
        text="Works"
        active={pathname === "/works" ? true : false}
      />
      <LinkBtn
        to="/components"
        text="Comp"
        active={pathname === "/components" ? true : false}
      />
    </nav>
  );
};

export default Nav;
