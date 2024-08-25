import "../component-css/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">B.C.A.</div>
        <div className="navbar-right">
          <a href="" className="nav-item">
            Apartments
          </a>
          <a href="" className="nav-item">
            Bar/Grill
          </a>
          <a href="" className="nav-item">
            Currencies
          </a>
          <a href="" className="nav-item">
            Reserve
          </a>
        </div>
      </nav>
    </>
  );
};
