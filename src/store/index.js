import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./slices/store.slice.js";

const store = configureStore({
  reducer: {
    storeHome: storeSlice,
  },
});

export default store;
