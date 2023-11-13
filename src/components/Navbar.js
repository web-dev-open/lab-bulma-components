import "./Navbar.css";
import "bulma/css/bulma.css";

function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <div
          className="navbar-burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <button
              style={{ marginRight: "10px" }}
              className="has-background-link has-text-white px-5 py-2 button is-link"
            >
              Login
            </button>
            <button className=" button has-background-primary has-text-white px-5 py-2 is-link">
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
