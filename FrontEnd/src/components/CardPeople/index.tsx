import "./styles.css";
import imgPessoa1 from "../../assets/foto-gc.jpg";

export default function CardPeople() {
  return (
      <div className="card-people">
        <img src={imgPessoa1} alt="" />
        <p>GC BarberShop</p>
      </div>
  );
}
