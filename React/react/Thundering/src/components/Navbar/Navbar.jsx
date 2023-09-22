import "../Navbar/Navbar.css";
import Logo from "./image/logo-86x74.png";

function navBar() {
  return (
    <nav className="navbar fixed-top pb-0 pt-0 navbar-expand-lg">
      <div className="container-fluid">
        <img src={Logo} className="image" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="product.html">
                Produtos
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul className="dropdown-menu">
                <div className="drop">
                  <li>
                    <a className="dropdown-item drop-content" href="#">
                      Teclado
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item drop-content" href="#">
                      Mouse
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item drop-content" href="#">
                      Mousepad
                    </a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-search" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default navBar;
