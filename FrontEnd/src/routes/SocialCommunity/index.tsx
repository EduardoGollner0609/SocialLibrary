import CardPeople from "../../components/CardPeople";
import SearchBar from "../../components/SearchBar";
import "./styles.css";

export default function SocialCommunity() {
  return (
    <main>
      <section id="section-social-community">
        <div className="box-title">
          <h1>Social Library</h1>
        </div>

        <div className="social-comunity-description-and-search">
          <div className="social-comunity-description">
            <h1>Procure amigos do mundo todo!</h1>
           
          </div>

          <div className="social-comunity-search">
            <SearchBar />
            <CardPeople />
            <CardPeople />
            <CardPeople />
            <CardPeople />
            <CardPeople />
            <CardPeople />
            <CardPeople />
            <CardPeople />
            <CardPeople />
            <CardPeople />
            <CardPeople />
            <CardPeople />
            <CardPeople />
            <CardPeople />
            <CardPeople />
          </div>
        </div>
      </section>
    </main>
  );
}