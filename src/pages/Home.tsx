import VerticalLayout from "@components/layout/VerticalLayout";

import { forwardRef } from "react";

const Home = (props: any, ref: any) => {
  return (
    <VerticalLayout pageTitle="Home">
      <div ref={el => (ref.current["home"] = el)}>Home</div>
    </VerticalLayout>
  );
};

export default forwardRef(Home);
