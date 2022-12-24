import SearchAnswer from "../SearchAnswer/SearchAnswer";
import "./SearchLine.css"

export default function SearchLine() {
  return (
    <div className="search-line">
        <input type="search" placeholder="Seach" className="search-line-input" />
        <SearchAnswer />
    </div>
  );
}
