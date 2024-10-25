import CardReadingCornerDescription from "../../components/CardReadingCornerDescription";
import CardStopWatch from "../../components/CardStopWatch";
import "./styles.css";

export default function ReadingCorner() {
  return (
    <main>
      <section id="section-reading-corner">
        <div className="box-title">
          <h1>Cantinho da leitura</h1>
        </div>
        <div className="cards-reading-corner-container">
          <div className="cards-reading-corner-top">
            <CardReadingCornerDescription />
            <CardStopWatch />
          </div>
        </div>
      </section>
    </main>
  );
}
