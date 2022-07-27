import { Link } from "react-router-dom";

const Components = () => {
  return (
    <div className="font-extrabold">
      Components
      <nav>
        <Link to="/about">
          <button> About</button>
        </Link>
      </nav>
    </div>
  );
};

export default Components;
