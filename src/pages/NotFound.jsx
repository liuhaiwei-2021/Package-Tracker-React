//NPM packages
import { Link } from "react-router-dom";
//project files
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Not Found!</h1>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
