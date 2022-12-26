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
    case "REMOVE_FROM_FAVORITES":
      favorites = [...state.favorites];

      let find = state.favorites.find(
        (item) => item.data.id === action.payload.id
      );

      let index = state.favorites.indexOf(find);
      favorites.splice(index, 1);

      return {
        ...state,
        favorites,
      };
    default:
      return initialState;
  }
}
