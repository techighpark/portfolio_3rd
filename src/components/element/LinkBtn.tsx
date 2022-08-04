import { forwardRef, useState } from "react";

interface linkBtnProps {
  to: string;
  text: string;
  // onClick: React.MouseEventHandler<HTMLElement>;
}

const LinkBtn = ({ to, text }: linkBtnProps, ref: any) => {
  const [isActive, setIsActive] = useState();
  const [currentPage, setCurrentPage] = useState();
  const onClick = () => {
    ref.current[to].scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex items-center" onClick={onClick}>
      <div className="flex flex-col items-center">
        <div
          className={
            isActive
              ? "flex aspect-square w-12 transform-gpu items-center justify-center rounded-lg bg-basic-lgiht shadow-deep drop-shadow-2xl transition-all duration-500 hover:cursor-pointer hover:bg-basic-lgiht hover:shadow-deep active:scale-95 active:bg-basic-lgiht"
              : "flex aspect-square w-12 transform-gpu items-center justify-center rounded-lg bg-basic-lgiht shadow-white drop-shadow-lg transition-all duration-500 hover:cursor-pointer hover:bg-basic-lgiht hover:drop-shadow-sm active:scale-95 active:bg-basic-lgiht active:shadow-deep"
          }
        >
          <span className="text-sm font-extralight">{text}</span>
        </div>

        <div
          className={
            isActive
              ? "mt-2 h-2 w-2 rounded-full bg-slate-400 transition-all duration-150"
              : "mt-2 h-2 w-2 rounded-full border border-slate-300 transition-all duration-150"
          }
        />
      </div>
    </div>
  );
};

export default forwardRef(LinkBtn);
