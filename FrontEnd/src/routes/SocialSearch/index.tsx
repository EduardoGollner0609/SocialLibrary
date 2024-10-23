import CardPeople from "../../components/CardPeople";
import PeopleDetails from "../../components/PeopleDetails";
import SearchBar from "../../components/SearchBar";
import "./styles.css";

export default function SocialHome() {
  return (
    <main>
      <section id="section-social-seacrh">
        <div className="box-title">
          <h1>Pesquisa</h1>
        </div>
        <div className="social-search-description-and-search">
          <div className="social-search-description">
            <PeopleDetails />
          </div>

          <div className="social-search-search">
            <h2>Pesquisa</h2>
            <SearchBar />
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
