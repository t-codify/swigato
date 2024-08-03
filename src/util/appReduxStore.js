import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
const appReduxStore = configureStore({
  reducer: {
    cart: cartReducer,
    // ...other reducers
  },
});
export default appReduxStore;
