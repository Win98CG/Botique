import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  isLogin: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});
export default userSlice;
export const userAction = userSlice.actions;
