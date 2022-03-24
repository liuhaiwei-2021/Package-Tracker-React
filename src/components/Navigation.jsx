//Project files
import "../styles/Navigation.css";

function Navigation() {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div>
          <a className="navbar-link" href="#hero">
            <img className="logo" src="images/logo.png" alt="logo" />
          </a>
        </div>

        <ul className="navbar-items">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              Track a package
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
