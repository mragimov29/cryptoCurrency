const initialState = {
  dates: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_DATES":
      const date = new Date(action.payload.date);
      let dates = [];

      for (let i = 0; i < action.payload.price.length; i++) {
        date.setHours(date.getHours() - 1);
        // let arrDate = new Date(
        //   `${date.getDay()}.${date.getMonth()} ${date.getHours()}:${date.getMinutes()}`
        // );
        dates.push(date);
        console.log(dates);
      }

      return {
        ...state,
        dates,
      };
    default:
      return initialState;
  }
}
