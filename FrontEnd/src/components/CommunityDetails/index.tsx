import "./styles.css";
import imgCommunity from "../../assets/foto-gc.jpg";

export default function PeopleDetails() {
  return (
    <div className="card-community-details">
      <button
        className="card-community-details-btn-exit"
      >
        <ion-icon name="arrow-undo-outline"></ion-icon>
        voltar
      </button>
      <h2>GC BarberShop</h2>
      <div className="card-community-details-top">
        <div className="community-credentials">
          <div className="credentials-item">
            <h3>Nome:</h3>
            <p>Lindões</p>
          </div>
          <div className="credentials-item">
            <h3>Quantidade de membros: </h3>
            <p>02/50</p>
          </div>
          <div className="credentials-item">
            <h3>Data de criação: </h3>
            <p>07/02/2024</p>
          </div>
        </div>

        <img src={imgCommunity} alt="" />
      </div>

      <div className="card-community-details-bottom">
        <div className="community-description">
          <h3>Sobre: </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, deserunt vel ullam quisquam unde excepturi laudantium,
            similique totam odit reiciendis inventore? Recusandae praesentium
            magnam iusto dolorum, adipisci cum autem necessitatibus.
          </p>
        </div>

        <div className="card-people-details-btns">
          <button>Entrar</button>
        </div>
      </div>
    </div>
  );
}
