export function setAcc(value) {
  return {
    type: "SET_ACC",
    payload: {
      value: value,
    },
  };
}

export function addToFavorites(data) {
  return {
    type: "ADD_TO_FAVORITES",
    payload: {
      data: data,
    },
  };
}

export function removeFromFavorites(id) {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: {
      id: id,
    },
  };
}

export function changePriceAndCount(id, price, count) {
  return {
    type: "CHANGE_PRICE_AND_COUNT",
    payload: {
      id: id,
      price: price,
      count: count,
    },
  };
}

export function initFavorites(data) {
  return {
    type: "INIT_FAVORITES", 
    payload: {
      data: data,
    }
  }
}