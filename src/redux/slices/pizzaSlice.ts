import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { ICartItems } from "./cartSlice";

export interface IFetchPizzas {
  currentPage: number;
  category: string;
  sortBy: string;
  order: string;
  searchValue: string;
}
export interface IPizzas {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
}
export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface IPizzaState {
  items: IPizzas[];
  status: Status;
}

const initialState: IPizzaState = {
  items: [],
  status: Status.LOADING,
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async ({
    currentPage,
    category,
    sortBy,
    order,
    searchValue,
  }: IFetchPizzas) => {
    const { data } = await axios.get<IPizzas[]>(
      `https://64b45fca0efb99d86268fe60.mockapi.io/items?page=${currentPage}&limit=4&category=${category}&sortBy=${sortBy}&order=${order}`
    );
    return data as IPizzas[];
  }
);

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

export const selectPizza = (state: RootState) => state.pizzaSlice;
export default pizzaSlice.reducer;
