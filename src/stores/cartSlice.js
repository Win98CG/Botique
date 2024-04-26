import { createSlice } from "@reduxjs/toolkit";
//get data from local storage
const items = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const totalQuantity = localStorage.getItem("totalQuantity")
  ? JSON.parse(localStorage.getItem("totalQuantity"))
  : 0;
const totalAmount = localStorage.getItem("totalAmount")
  ? JSON.parse(localStorage.getItem("totalAmount"))
  : 0;

const setItemFunc = function (cartItems, totalQuantity, totalAmount) {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
};
const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_CART(state, action) {
      const newItem = action.payload.item;
      const existingItem = state.cartItems.find(
        (item) => item._id.$oid === newItem._id.$oid
      );
      state.totalQuantity += action.payload.quantity;
      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
          quantity: action.payload.quantity,
          totalPrice: Number(newItem.price) * Number(action.payload.quantity),
        });
      } else {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice =
          Number(existingItem.price) * Number(existingItem.quantity);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // localStorage.setItem(
      //   "totalQuantity",
      //   JSON.stringify(state.totalQuantity)
      // );
      // localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      setItemFunc(state.cartItems, state.totalQuantity, state.totalAmount);
    },
    REMOVE_CART(state, action) {
      const id = action.payload.id;
      //find product with id
      const existingItem = state.cartItems.find((item) => item._id.$oid === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id.$oid !== id
        );
        console.log(state.cartItems);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.price) * Number(existingItem.quantity);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // localStorage.setItem(
      //   "totalQuantity",
      //   JSON.stringify(state.totalQuantity)
      // );
      // localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      setItemFunc(state.cartItems, state.totalQuantity, state.totalAmount);
    },
    DELETE_CART(state, action) {
      const id = action.payload.id;
      const existingItem = state.cartItems.find((item) => item._id.$oid === id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id.$oid !== id
        );
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // localStorage.setItem(
      //   "totalQuantity",
      //   JSON.stringify(state.totalQuantity)
      // );
      // localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      setItemFunc(state.cartItems, state.totalQuantity, state.totalAmount);
    },
  },
});

export default cartSlice;
export const cartAction = cartSlice.actions;
