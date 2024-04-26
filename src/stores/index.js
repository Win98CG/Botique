import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./popupSlice";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
