import "./styles.css";
import imgMyProfile from "../../assets/foto-gc.jpg";

export default function CardCommunity() {
  return (
    <div className="card-my-profile">
<a href="" className="link-edit-my-profile">
<ion-icon name="create-outline"></ion-icon>
<p>Editar</p>
</a>
      <h2>GC BarberShop</h2>
      <div className="card-my-profile-img">
        <img src={imgMyProfile} alt="" />
      </div>
      <div className="card-my-profile-bottom">
        <div className="card-my-profile-bottom-item">
          <h3>Nome: </h3>
          <p>Gerson Sousa Kleyton Ramalho</p>
        </div>
        <div className="card-my-profile-bottom-item">
          <h3>Data de Nascimento: </h3>
          <p>07/09/2005</p>
        </div>
        <div className="card-my-profile-bottom-item">
          <h3>Email: </h3>
          <p>gcbarber@gmail.com</p>
        </div>
        <div className="card-my-profile-bottom-item">
          <h3>Bio: </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
            ut! Tempora ut et modi deleniti perferendis! Hic, fuga! Consequuntur
            fuga quae facere eos officia eveniet perspiciatis quo ipsam
            voluptatum sapiente.
          </p>
        </div>
        <div className="card-my-profile-bottom-item">
          <h3>Genero literario preferido: </h3>
          <p>Romance</p>
        </div>
      </div>
    </div>
  );
}
