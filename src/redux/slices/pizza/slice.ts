import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { IPizzaState, Status, IPizzas } from "./types";
import { fetchPizzas } from "./asyncAction";
import { Reducer } from "react";
import { AnyAction } from "@reduxjs/toolkit";

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
        console.log(state.status);
      })
      .addCase(
        fetchPizzas.fulfilled,
        (state, action: PayloadAction<IPizzas[]>) => {
          state.items = action.payload;
          state.status = Status.SUCCESS;
          console.log(state.status);
        }
      )
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
        console.log(state.status);
      });
  },
});

export default pizzaSlice.reducer;
