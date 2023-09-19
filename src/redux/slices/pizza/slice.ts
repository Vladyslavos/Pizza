import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IPizzaState, Status, IPizzas } from "./types";
import { fetchPizzas } from "./asyncAction";

const initialState: IPizzaState = {
  items: [],
  status: Status.LOADING,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(
        fetchPizzas.fulfilled,
        (state, action: PayloadAction<IPizzas[]>) => {
          state.items = action.payload;
          state.status = Status.SUCCESS;
        }
      )
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export default pizzaSlice.reducer;
