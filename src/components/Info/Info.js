import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoSchedule from "../InfoSchedule/InfoSchedule";
import "./Info.css";

export default function Info() {
  const params = useParams();

  const [oneTime, setOneTime] = useState(true);
  const [data, setData] = useState(null);

  const getData = async () => {
    let response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${[
        params.id,
      ]}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`
    );
    let data = response.json();
    return data;
  };

  useEffect(() => {
    // if (oneTime) {
    getData()
      .then((res) => {
        setData(res);
      })
      .catch((err) => alert(err));
    setOneTime(false);
    // }
  }, []);

  if (data === null) return <h1>Loading...</h1>;

  return (
    <div className="info-page">
      <div className="main-and-link">
        <div className="main-info">
          <div className="rank">Rank #{data.coingecko_rank}</div>
          <div className="name">
            <img className="info-img" src={data.image.small}></img>
            <h2>{data.name}</h2>
            <h2>({data.symbol.toUpperCase()})</h2>
          </div>
          <div className="price">
            <h3>${data.market_data.current_price.usd}</h3>
            <h3
              className={
                data.market_data.price_change_percentage_24h > 0
                  ? "green-td"
                  : "red-td"
              }
            >
              {data.market_data.price_change_percentage_24h > 0
                  ? "⬆ "
                  : "⬇ "}
              {data.market_data.price_change_percentage_24h.toFixed(2)}
            </h3>
          </div>
          <div
            className="info-description"
            dangerouslySetInnerHTML={{ __html: data.description.en }}
          ></div>
        </div>

        <div className="links">
          <h2>Links</h2>
          <a href="">
            <button className="info-link-bat">Homepage</button>
          </a>
          <a href="">
            <button className="info-link-bat">Facebook</button>
          </a>
          <a href="">
            <button className="info-link-bat">Reddit</button>
          </a>
          <a href="">
            <button className="info-link-bat">Twitter</button>
          </a>
          <a href="">
            <button className="info-link-bat">GitHub</button>
          </a>
        </div>
      </div>
      <InfoSchedule
        price={data.market_data.sparkline_7d}
        date={data.market_data.last_updated}
      />
    </div>
  );
}
