import "./styles.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" />
      <div className="search-bar-icon">
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </div>
  );
}
