import { Link } from "react-router-dom";
import CardRegister from "../../components/CardRegister";
import "./styles.css";

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
          <CardRegister />
        </section>
      </main>
    </>
  );
}
