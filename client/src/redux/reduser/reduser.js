const initialState = {
  favorites: [],
  value: "",
};

export default function reducer(state = initialState, action) {
  let favorites = [],
    find;
  switch (action.type) {
    case "INIT_FAVORITES":
      favorites = action.payload.data;

      return {
        ...state,
        favorites,
      };
    case "ADD_TO_FAVORITES":
      console.log(action.payload.data.count);
      let favs = {
        data: {
          id: action.payload.data.data.id,
          symbol: action.payload.data.data.symbol,
          name: action.payload.data.data.name,
          image: { small: action.payload.data.data.image.small },
          market_data: {
            current_price: {
              usd: action.payload.data.data.market_data.current_price.usd,
            },
          },
        },
        count: action.payload.data.count,
        price: action.payload.data.price,
      };

      favorites = [...state.favorites, favs];

      fetch(`/api/change/${state.value}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(favorites),
      });

      return {
        ...state,
        favorites: favorites,
      };
    case "SET_ACC":
      return {
        ...state,
        value: action.payload.value,
      };
    case "REMOVE_FROM_FAVORITES":
      favorites = [...state.favorites];

      find = state.favorites.find((item) => item.data.id === action.payload.id);

      let index = state.favorites.indexOf(find);
      favorites.splice(index, 1);

      fetch(`/api/change/${state.value}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(favorites),
      });

      return {
        ...state,
        favorites,
      };
    case "CHANGE_PRICE_AND_COUNT":
      favorites = [...state.favorites];

      favorites.find((item) => item.data.id === action.payload.id).count =
        action.payload.count;
      favorites.find((item) => item.data.id === action.payload.id).price =
        action.payload.price;

      fetch(`/api/change/${state.value}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(favorites),
      });

      return {
        ...state,
        favorites,
      };
    default:
      return initialState;
  }
}
