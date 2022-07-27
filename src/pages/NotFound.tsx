import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/", { replace: true }), 2000);
  });

  return (
    <div className="font-extrabold">
      Sorry, page is not found 🫥 Go back to main page soon.
    </div>
  );
};

export default NotFound;
