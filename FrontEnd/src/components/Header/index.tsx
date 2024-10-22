import "./styles.css";
import menuItem from "../../assets/menu-items-white.svg";
import closeMenuItem from "../../assets/close-items-white.svg";

export default function Header() {
  function menuShow() {
    const menuMobile = document.querySelector(
      ".mobile-menu"
    ) as HTMLElement | null;
    const icon = document.querySelector(".icon") as HTMLElement | null;

    if (menuMobile?.classList.contains("open")) {
      menuMobile.classList.remove("open");
      icon?.setAttribute("src", menuItem);
    } else {
      menuMobile?.classList.add("open");
      icon?.setAttribute("src", closeMenuItem);
    }
  }

  return (
    <header>
      <nav>
        <h1>Social Library</h1>

        <ul className="list-navegation">
          <li className="nav-item">
            <a href="">Entrar</a>
          </li>
          <li className="nav-item">
            <a href="">Mais Detalhes</a>
          </li>
        </ul>

        <div className="mobile-menu-icon">
          <button onClick={menuShow}>
            <img id ="icon-fechar" className="icon" src={menuItem} alt="Abrir Opções" />
          </button>
        </div>
      </nav>

      <div className="mobile-menu">
        <ul>
          <li className="nav-item">
          <a href="">Entrar</a>
          </li>
          <li className="nav-item">
          <a href="">Mais Detalhes</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
