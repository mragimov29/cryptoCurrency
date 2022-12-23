export function createDates(date, price) {
  return {
    type: "CREATE_DATES",
    payload: {
      date: date,
      price: price
    },
  };
}
