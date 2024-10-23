import "./styles.css";
import imgPeople from "../../assets/foto-gc.jpg";

export default function PeopleDetails() {
  return (
    <div className="card-people-details">
      <h2>GC BarberShop</h2>
      <div className="card-people-details-top">
        <div className="people-credentials">
          <h3>Username:</h3>
          <p>GC BarberShop</p>
          <h3>Nome Completo: </h3>
          <p>Gerson Souza Kleyton Ramalho</p>
          <h3>Data de Nascimento: </h3>
          <p>20/07/2003</p>
        </div>

        <img src={imgPeople} alt="" />
      </div>

      <div className="card-people-details-bottom">
        <div className="people-description">
          <h3>Biografia: </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, deserunt vel ullam quisquam unde excepturi laudantium,
            similique totam odit reiciendis inventore? Recusandae praesentium
            magnam iusto dolorum, adipisci cum autem necessitatibus.
          </p>
          <h3>Genero Literario preferido:</h3>
          <p>Romance</p>
        </div>

        <div className="card-people-details-btns">
          <button>Enviar Mensagem</button>
          <button>Ver posts</button>
          <button>Acessar biblioteca</button>
        </div>
      </div>
    </div>
  );
}
