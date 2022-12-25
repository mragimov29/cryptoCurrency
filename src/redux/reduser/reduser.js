const initialState = {
  value: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ACC":
      console.log(action.payload.value)

      return {
        ...state,
        value: action.payload.value,
      }
    default:
      return initialState;
  }
}
