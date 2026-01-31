import { Link, NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Way of Messiah
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#womNav"
          aria-controls="womNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="womNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/testimonies">
                Testimonies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/submit">
                Submit
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/testimonies">
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default AppNavbar;
