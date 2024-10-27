import "./styles.css";

export default function CardResume() {
  return (
    <div className="card-resume">
      <div className="card-resume-top">
        <h3>Java para Leigos</h3>
        <p>20/07/2024 05:00</p>
      </div>
      <div className="card-resume-bottom">
       <button className="btn-open">Abrir</button>
       <button className="btn-remove">Excluir</button>
      </div>
    </div>
  );
}
