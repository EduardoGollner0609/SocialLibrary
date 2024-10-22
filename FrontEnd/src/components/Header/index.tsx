import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <h1>Social Library</h1>
        </NavLink>

        <ul className="list-navegation">
          <li className="nav-item">
            <NavLink to="/more-details">Mais Detalhes</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
