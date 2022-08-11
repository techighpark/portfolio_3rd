import VerticalLayout from "@components/layout/PageLayout";
import { useEffect } from "react";

const NotFound = () => {
  // useEffect(() => {
  //   setTimeout(() => navigate("/", { replace: true }), 2000);
  // });

  return (
    <VerticalLayout pageTitle="Not Found">
      <div
        className="text-8xl font-extrabold uppercase text-white"
        id="neumorphismText"
      >
        Sorry, page is not found 🫥 Go back to main page soon.
      </div>
    </VerticalLayout>
  );
};

export default NotFound;
