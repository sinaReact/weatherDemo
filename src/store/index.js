import { configureStore } from "@reduxjs/toolkit";

import weatherSliceReducer from "./weatherSlice";
import UISliceReducer from "./UISlice";

export const store = configureStore({
  reducer: {
    weatherSlice: weatherSliceReducer,
    UISlice: UISliceReducer,
  },
});
