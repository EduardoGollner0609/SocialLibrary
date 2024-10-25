import CardMyProfile from "../../components/CardMyProfile";
import "./styles.css";

export default function ProfilePage() {
  return (
    <main>
      <section id="section-my-profile">
        <div className="box-title">
          <h1>Perfil</h1>
        </div>
        <div className="div-card-my-profile">
          <CardMyProfile />
        </div>
      </section>
    </main>
  );
}
