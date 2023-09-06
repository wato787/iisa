import { configureStore } from "@reduxjs/toolkit";
import countSliceReducer from "../slice/countSlice";

export const store = configureStore({
  reducer: {
    count: countSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
