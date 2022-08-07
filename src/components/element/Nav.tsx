import LinkBtn from "@components/element/LinkBtn";
import { forwardRef, useState } from "react";

const Nav = (props: any, ref: any) => {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const onClick = (to: string) => {
    ref.current[to].scrollIntoView({ behavior: "smooth" });
    setCurrentPage(to);
  };
  return (
    <nav className="flex justify-center space-x-5 rounded-xl border bg-white px-4 pb-3 pt-3 shadow-inner drop-shadow-lg backdrop-blur-sm backdrop-opacity-30">
      <LinkBtn
        to="home"
        text="Home"
        ref={ref}
        onClick={onClick}
        isActive={currentPage === "home"}
      />
      <LinkBtn
        to="about"
        text="About"
        ref={ref}
        onClick={onClick}
        isActive={currentPage === "about"}
      />
      <LinkBtn
        to="works"
        text="Works"
        ref={ref}
        onClick={onClick}
        isActive={currentPage === "works"}
      />
      <LinkBtn
        to="components"
        text="Comp"
        ref={ref}
        onClick={onClick}
        isActive={currentPage === "components"}
      />
    </nav>
  );
};

export default forwardRef(Nav);
