import { configureStore } from "@reduxjs/toolkit";

import farmerSlice from "./farmerSlice";

const store = configureStore({
  reducer: {
    farmer: farmerSlice,
  },
});

export default store;
