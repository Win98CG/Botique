import { createSlice } from "@reduxjs/toolkit";
const popupSlice = createSlice({
  name: "popup",
  initialState: { isShow: false, product: {} },
  reducers: {
    showPopup(state, action) {
      state.isShow = true;
      state.product = action.payload;
    },
    hidePopup(state, action) {
      state.isShow = false;
      state.product = {};
    },
  },
});
export default popupSlice;
export const popupAction = popupSlice.actions;
