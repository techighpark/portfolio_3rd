import { forwardRef } from "react";

type ClickFn = (to: string) => void;
interface linkBtnProps {
  to: string;
  text?: string;
  onClick: ClickFn;
  isActive: boolean;
}

const LinkBtn = ({ to, text, onClick, isActive }: linkBtnProps, ref: any) => {
  return (
    <div className="relative flex items-center" onClick={() => onClick(to)}>
      <div className="flex flex-col items-center">
        <div
          className={`flex aspect-square w-12 transform-gpu items-center justify-center rounded-xl transition-all duration-500 ${
            isActive
              ? "bg-white shadow-morDeeperSm"
              : "bg-gradient-to-br from-[#ffffff] to-[#e6e6e6] shadow-morUpperSm"
          }`}
        >
          <div className="flex flex-col">
            <span className="text-sm font-extralight">{text}</span>
          </div>
        </div>

        {/* <div className="flex items-center justify-center">
          <span
            className={
              isActive
                ? "absolute mt-3 inline-flex h-2 w-2 animate-ping rounded-full bg-orange-400 transition-all duration-150"
                : "mt-3 h-2 w-2 rounded-full border border-orange-200"
            }
          />
          {isActive ? (
            <span className="relative mt-3 inline-flex h-2 w-2 rounded-full bg-orange-300" />
          ) : null}
        </div> */}
      </div>
    </div>
  );
};

export default forwardRef(LinkBtn);
