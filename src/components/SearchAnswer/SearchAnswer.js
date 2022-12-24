import "./SearchAnswer.css";

export default function SearchAnswer({ search, data }) {
  console.log(data);
  if (data === null) return true;

  return (
    <div className={search ? "search-answer" : "search-none"}>
      {data.coins.map((item) => {
        return (
          <div className="result">
            <img className="result-img" src={item.thumb}></img>
            <div>{item.name}</div>
            <div>{item.symbol}</div>
          </div>
        );
      })}
    </div>
  );
}
