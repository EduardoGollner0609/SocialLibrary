import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <h1>Social Library</h1>

      <div className="footer-contacts">
        <ul className="list-contacts">
          <li className="contact-item">
            <a href="https://www.instagram.com/dudugollner05/">
              <ion-icon name="logo-instagram" className="icon"></ion-icon>
              <p>@social_library</p>
            </a>
          </li>
        
        </ul>
      </div>
    </footer>
  );
}
