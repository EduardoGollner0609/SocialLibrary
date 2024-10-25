import "./styles.css";
import imgPessoa1 from "../../assets/foto-gc.jpg";

export default function CardPeople() {
  
  function cardPeopleDetailShow() {
    const cardPeopleDetails = document.querySelector(".card-people-details");
    if (cardPeopleDetails != null) {
      cardPeopleDetails.classList.add("card-active");
    }
  }

  return (
    <div className="card-people" onClick={cardPeopleDetailShow}>
      <img src={imgPessoa1} alt="" />
      <p>GC BarberShop</p>
    </div>
  );
}
