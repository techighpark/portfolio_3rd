import PageLayout from "@components/layout/PageLayout";

import { forwardRef } from "react";

const Home = (props: any, ref: any) => {
  return (
    <PageLayout pageTitle="Home">
      <div ref={(el) => (ref.current["home"] = el)}>
        <div className="h-full w-full rounded-3xl border border-blue-400 px-5">
          Home
        </div>
      </div>
    </PageLayout>
  );
};

export default forwardRef(Home);
