import { Link } from "react-router-dom";
import CardRegister from "../../components/CardRegister";
import "./styles.css";
import Footer from "../../components/Footer";

export default function RegisterPage() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <h1>Social Library</h1>
          </Link>
        </nav>
      </header>
      <main>
        <section id="section-register">
          <div className="register-content">
            <CardRegister />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
