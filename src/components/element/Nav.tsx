import LinkBtn from "@components/element/LinkBtn";
import { forwardRef } from "react";

const Nav = (props: any, ref: any) => {
  // const { pathname } = useLocation();

  return (
    <nav className="flex justify-center space-x-5 rounded-xl border bg-white px-4 pb-3 pt-2 shadow-inner drop-shadow-lg backdrop-blur-sm backdrop-opacity-30">
      <LinkBtn
        to="home"
        text="Main"
        ref={ref}
        // active={pathname === "/" ? true : false}
      />
      <LinkBtn
        to="about"
        text="About"
        ref={ref}
        // active={pathname === "/about" ? true : false}
      />
      <LinkBtn
        to="works"
        text="Works"
        ref={ref}
        // active={pathname === "/works" ? true : false}
      />
      <LinkBtn
        to="components"
        text="Comp"
        ref={ref}
        // active={pathname === "/components" ? true : false}
      />
    </nav>
  );
};

export default forwardRef(Nav);
