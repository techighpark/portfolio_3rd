import LinkBtn from "@components/element/LinkBtn";
import { forwardRef, useState } from "react";

const Nav = (props: any, ref: any) => {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const onClick = (to: string) => {
    ref.current[to].scrollIntoView({ behavior: "smooth" });
    setCurrentPage(to);
  };
  return (
    <nav className="flex justify-center space-x-5 rounded-xl bg-gradient-to-br from-[#f2f2f2] to-[#ffffff] px-4 pb-3 pt-3 shadow-morRadiusMd">
      <LinkBtn
        to="home"
        text=""
        ref={ref}
        onClick={onClick}
        isActive={currentPage === "home"}
      />
      <LinkBtn
        to="about"
        text=""
        ref={ref}
        onClick={onClick}
        isActive={currentPage === "about"}
      />
      <LinkBtn
        to="works"
        text=""
        ref={ref}
        onClick={onClick}
        isActive={currentPage === "works"}
      />
      <LinkBtn
        to="components"
        text=""
        ref={ref}
        onClick={onClick}
        isActive={currentPage === "components"}
      />
    </nav>
  );
};

export default forwardRef(Nav);
