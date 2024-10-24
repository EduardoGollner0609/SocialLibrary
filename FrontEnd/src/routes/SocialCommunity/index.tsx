import CardCommunity from "../../components/CardCommunity";
import SearchBar from "../../components/SearchBar";
import "./styles.css";

export default function SocialCommunity() {
  return (
    <main>
      <section id="section-social-community">
        <div className="box-title">
          <h1>Comunidade</h1>
        </div>

        <div className="social-comunity-description-and-search">
        <div className="social-comunity-search">
            <h2>Pesquisa</h2>
            <SearchBar />
            <CardCommunity />
            <CardCommunity />
            <CardCommunity />
            <CardCommunity />
            <CardCommunity />
            <CardCommunity />
            <CardCommunity />
            <CardCommunity />
          </div>
          <div className="social-comunity-description">
            <h1>Procure amigos do mundo todo!</h1>
          </div>

         
        </div>
      </section>
    </main>
  );
}
