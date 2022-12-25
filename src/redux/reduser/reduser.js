const initialState = {
  favorites: [],
  value: "",
};

export default function reducer(state = initialState, action) {
  let favorites = [];
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      let data = null;
      fetch(
        `https://api.coingecko.com/api/v3/coins/${[
          action.payload.id,
        ]}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`
      )
        .then((res) => res.json())
        .then((d) => {
          data = d;
        });

      setTimeout(() => { favorites = [...state.favorites, data]; }, 500)
  
      return {
        ...state,
        favorites
      };
    case "SET_ACC":
      return {
        ...state,
        value: action.payload.value,
      };
    default:
      return initialState;
  }
}
