import { forwardRef } from "react";
import Nav from "../element/Nav";

const Footer = (props: any, ref: any) => {
  return (
    <div className="absolute inset-x-0 bottom-10 flex h-24 items-center justify-center">
      Footer
      <Nav ref={ref} />
    </div>
  );
};

export default forwardRef(Footer);
