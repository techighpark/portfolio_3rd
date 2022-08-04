import VerticalLayout from "@components/layout/VerticalLayout";
import { forwardRef } from "react";

const Components = (props: any, ref: any) => {
  return (
    <VerticalLayout pageTitle="Components">
      <div ref={el => (ref.current["components"] = el)}>Components</div>
    </VerticalLayout>
  );
};

export default forwardRef(Components);
