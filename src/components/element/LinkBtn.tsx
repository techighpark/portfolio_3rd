import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

interface linkBtnProps {
  to: string;
  text: string;
  active?: boolean;
}

const LinkBtn = ({ to, text, active }: linkBtnProps) => {
  return (
    <ScrollLink to={to} className="flex items-center" spy={true} smooth={true}>
      <div className="flex flex-col items-center">
        <div
          className={
            active
              ? "flex aspect-square w-12 transform-gpu items-center justify-center rounded-lg bg-basic-lgiht shadow-deep drop-shadow-2xl transition-all duration-500 hover:cursor-pointer hover:bg-basic-lgiht hover:shadow-deep active:scale-95 active:bg-basic-lgiht"
              : "flex aspect-square w-12 transform-gpu items-center justify-center rounded-lg bg-basic-lgiht shadow-white drop-shadow-lg transition-all duration-500 hover:cursor-pointer hover:bg-basic-lgiht hover:drop-shadow-sm active:scale-95 active:bg-basic-lgiht active:shadow-deep"
          }
        >
          <span className="text-sm font-extralight">{text}</span>
        </div>

        <div
          className={
            active
              ? "mt-2 h-2 w-2 rounded-full bg-slate-400 transition-all duration-150"
              : "mt-2 h-2 w-2 rounded-full border border-slate-300 transition-all duration-150"
          }
        />
      </div>
    </ScrollLink>
  );
};

export default LinkBtn;
