const initialState = {
  favorites: [],
  value: "",
};

export default function reducer(state = initialState, action) {
  let favorites = [];
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      favorites = [...state.favorites, action.payload.data];

      return {
        ...state,
        favorites: favorites,
      };
    case "SET_ACC":
      return {
        ...state,
        value: action.payload.value,
      };
    case "CHANGE_PRICE":
      // if(action.payload.buyOrSell === "Buy") {
      //   // favorites.find((e) => e.data.id === action.payload.id).price += action.payload.id;
      //   favorites = [...state.favorites, favorites.find((e) => e.data.id === action.payload.id).price += action.payload.id]
      // }
      // console.log(favorites);
      // return {
      //   ...state,
      //   favorites,
      // };
    default:
      return initialState;
  }
}
