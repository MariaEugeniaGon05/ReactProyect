import CartWidget from "./CartWidget";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <Link to="/">Atenea</Link>
          </li>
        </h2>
        <li className="nav-item">
          <Link className="nav-link" to="/category/perfumes">
            Perfumes
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/cremas">
            Cremas
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/nosotros">
            Nosotros
          </Link>
        </li>
        <CartWidget></CartWidget>
      </ul>
    </nav>
  );
}
