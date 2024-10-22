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
        <a href="">
          <span className="icon">
            <ion-icon name="home-outline"></ion-icon>
          </span>
          <span className="text">Home</span>
        </a>
      </li>

      <li className="list-item">
        <a href="">
          <span className="icon">
            <ion-icon name="person-outline"></ion-icon>
          </span>
          <span className="text">Profile</span>
        </a>
      </li>

      <li className="list-item">
        <a href="">
          <span className="icon">
          <ion-icon name="book-outline"></ion-icon>
          </span>
          <span className="text">Cantinho da Leitura</span>
        </a>
      </li>

      <div className="bottom">
        <li>
          <a href="">
            <span className="icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className="text">Sair</span>
          </a>
        </li>
      </div>
    </ul>
  </div>
  );
}
