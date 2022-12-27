const initialState = {
  favorites: [],
  value: "",
};

export default function reducer(state = initialState, action) {
  let favorites = [],
    find;
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
    case "REMOVE_FROM_FAVORITES":
      favorites = [...state.favorites];

      find = state.favorites.find((item) => item.data.id === action.payload.id);

      let index = state.favorites.indexOf(find);
      favorites.splice(index, 1);

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

      return {
        ...state,
        favorites,
      }
    default:
      return initialState;
  }
}
