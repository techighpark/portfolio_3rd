import PageLayout from "@components/layout/PageLayout";

import { forwardRef } from "react";

const About = (props: any, ref: any) => {
  return (
    <PageLayout pageTitle="About">
      <div ref={el => (ref.current["about"] = el)} className="opacity-0">
        abc
      </div>
      <div>About</div>
    </PageLayout>
  );
};

export default forwardRef(About);
