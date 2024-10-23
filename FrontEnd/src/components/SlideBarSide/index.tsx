import { Link, NavLink } from "react-router-dom";
import "./styles.css";

export default function SlideBarSide() {
  return (
    <div className="slidebar">
      <ul>
        <div className="logo-space">
          <li className="logo-title">
            <h2>Social Library</h2>
          </li>
        </div>

        <li className="list-item">
          <NavLink to="/social/home">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Home</span>
          </NavLink>
        </li>

        <li className="list-item">
          <NavLink to="/social/search">
            <span className="icon">
            <ion-icon name="search-outline"></ion-icon>
            </span>
            <span className="text">Search</span>
          </NavLink>
        </li>

        <li className="list-item">
          <NavLink to="/social/community">
            <span className="icon">
            <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="text">Comunidades</span>
          </NavLink>
        </li>

        <li className="list-item">
          <NavLink to="/social/profile">
            <span className="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span className="text">Profile</span>
          </NavLink>
        </li>

        <li className="list-item">
          <NavLink to="/social/reading-corner">
            <span className="icon">
              <ion-icon name="book-outline"></ion-icon>
            </span>
            <span className="text">Cantinho da Leitura</span>
          </NavLink>
        </li>

        <li className="list-item">
         <a href="">
            <span className="icon">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className="text">Configurações</span>
            </a>
        </li>

        <div className="bottom">
          <li>
            <Link to="/">
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="text">Sair</span>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
