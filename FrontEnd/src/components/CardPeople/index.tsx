import "./styles.css";
import imgPessoa1 from "../../assets/foto-gc.jpg";

export default function CardPeople() {
  return (
    <section>
      <div className="card-people">
        <img src={imgPessoa1} alt="" />
        <p>GC BarberShop</p>
      </div>
    </section>
  );
}
