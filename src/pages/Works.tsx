import VerticalLayout from "@components/layout/PageLayout";

import { forwardRef } from "react";

const Works = (props: any, ref: any) => {
  return (
    <VerticalLayout pageTitle="Works">
      <div ref={el => (ref.current["works"] = el)}>Works</div>
    </VerticalLayout>
  );
};

export default forwardRef(Works);
