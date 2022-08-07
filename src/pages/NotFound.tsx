import VerticalLayout from "@components/layout/PageLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/", { replace: true }), 2000);
  });

  return (
    <VerticalLayout pageTitle="Not Found">
      <div className="font-extrabold">
        Sorry, page is not found 🫥 Go back to main page soon.
      </div>
    </VerticalLayout>
  );
};

export default NotFound;
