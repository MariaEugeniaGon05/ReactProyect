import "./NavbarStyle.css";

export default function Navbar({ children }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <ul className="container-fluid">
        <a className="navbar-brand" href="./index.html">
          <img
            className="logo-width"
            src="https://cdn.icon-icons.com/icons2/503/PNG/512/natural-perfume_icon-icons.com_49224.png"
          />{" "}
          Atenea
        </a>
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
                href="./pages/cremas.html"
              >
                Cremas
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="./index.html"
              >
                inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="./pages/preguntas.html">
                Preguntas
              </a>
            </li>
          </ul>
          {children}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </ul>
    </nav>
  );
}
