import Nav from "@components/element/Nav";
import { forwardRef } from "react";

const Footer = (props: any, ref: any) => {
  return (
    <div className="fixed inset-x-0 bottom-10 flex h-24 items-center justify-center">
      <Nav ref={ref} />
    </div>
  );
};

export default forwardRef(Footer);
