export const addToCart = (item = {}, quantity, isGreaterThanTen = false) => ({
  type: "ADD_TO_CART",
  item,
  quantity,
  isGreaterThanTen
});
export const removeFromCart = item => ({
  type: "REMOVE_FROM_CART",
  id: item.id,
  item
});

export const deleteAll = id => ({
  type: "DELETE_ALL",
  id
});
