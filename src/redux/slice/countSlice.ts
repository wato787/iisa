import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Count = {
  count: number;
  data: {
    id: string | undefined;
    userId: string;
    userName: string;
    month: number;
    breakTime: number | undefined | null;
    workedTime: number | undefined | null;
  };
};

const initialState: Count = {
  count: 0,
  data: {
    id: undefined,
    userId: "",
    userName: "",
    month: 0,
    breakTime: 0,
    workedTime: 0,
  },
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setCountData: (state, action: PayloadAction<Count["data"]>) => {
      state.data = action.payload;
    },
  },
});

export const { setCount, setCountData } = countSlice.actions;

export default countSlice.reducer;
