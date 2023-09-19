import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilterState, ISort } from "./types";

const initialState: IFilterState = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: { name: "popularity", sortProperty: "popularity" },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<ISort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilterState>) {
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.currentPage);
      state.currentPage = Number(action.payload.currentPage);
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setCategoryId,
  setSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
