export function setAcc(value) {
  return {
    type: "SET_ACC",
    payload: {
      value: value,
    },
  };
}
