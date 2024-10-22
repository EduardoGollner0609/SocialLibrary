import CardRegister from "../../components/CardRegister";
import "./styles.css";

export default function RegisterPage() {
  return (
    <>
      <header>
        <nav>
          <h1>Social Library</h1>
        </nav>
      </header>
      <main>
        <section>
          <CardRegister />
        </section>
      </main>
    </>
  );
}
