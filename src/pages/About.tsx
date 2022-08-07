import VerticalLayout from "@components/layout/PageLayout";

import { forwardRef } from "react";

const About = (props: any, ref: any) => {
  return (
    <VerticalLayout pageTitle="About">
      <div ref={el => (ref.current["about"] = el)}>About</div>
    </VerticalLayout>
  );
};

export default forwardRef(About);
