import "./styles.css";
import imgCommunity from "../../assets/foto-gc.jpg";

export default function CardCommunity() {
  function cardCommunityDetailsShow() {
    const cardCommunityDetails = document.querySelector(
      ".card-community-details"
    );
    if (cardCommunityDetails != null) {
      cardCommunityDetails.classList.add("card-community-active");
    }
  }
  return (
    <div className="card-community" onClick={cardCommunityDetailsShow}>
      <img src={imgCommunity} alt="" />
      <p>Nome da comunidade</p>
      <p>0/50</p>
    </div>
  );
}
