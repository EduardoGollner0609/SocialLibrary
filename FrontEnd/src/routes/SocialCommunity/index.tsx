import CardCommunity from "../../components/CardCommunity";
import CommunityDetails from "../../components/CommunityDetails";
import SearchBar from "../../components/SearchBar";
import "./styles.css";

export default function SocialCommunity() {
  return (
    <main>
      <section id="section-social-community">
        <div className="box-title">
          <h1>Comunidade</h1>
        </div>

        <div className="social-community-description-and-search">
          <div className="social-community-search">
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
          <div className="social-community-description">
            <CommunityDetails />
          </div>
        </div>
      </section>
    </main>
  );
}
