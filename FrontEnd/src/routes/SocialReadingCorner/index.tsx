import CardStopWatch from "../../components/CardStopWatch";
import "./styles.css";

export default function ReadingCorner() {
  return (
    <main>
      <section id="section-reading-corner">
        <div className="box-title">
          <h1>Cantinho da leitura</h1>
        </div>
        <div>
          <CardStopWatch />
        </div>
      </section>
    </main>
  );
}
