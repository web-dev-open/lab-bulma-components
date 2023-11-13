import "./Navbar.css";
import "bulma/css/bulma.css";

function Navbar() {
  return (
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <div
          class="navbar-burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <button
              style={{ marginRight: "10px" }}
              class="has-background-link has-text-white px-5 py-2 button is-link"
            >
              Login
            </button>
            <button class=" button has-background-primary has-text-white px-5 py-2 is-link">
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
