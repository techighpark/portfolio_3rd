import PageLayout from "@components/layout/PageLayout";

import { forwardRef } from "react";

const Home = (props: any, ref: any) => {
  return (
    <PageLayout pageTitle="Home">
      <div ref={el => (ref.current["home"] = el)} className="opacity-0"></div>
      <div className="mx-5 h-full w-screen rounded-3xl border border-blue-400">
        Home
      </div>
    </PageLayout>
  );
};

export default forwardRef(Home);
