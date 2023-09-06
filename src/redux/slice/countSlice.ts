import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Count = {
  count: number;
};

const initialState: Count = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { setCount } = countSlice.actions;

export default countSlice.reducer;
