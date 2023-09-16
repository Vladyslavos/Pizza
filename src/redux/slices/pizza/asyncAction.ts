import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { IFetchPizzas, IPizzas } from "./types";
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
    return data;
  }
);
