import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ISort {
  name: string;
  sortProperty: string;
}

interface IFilterState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: ISort;
}

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
      console.log(action.payload);
    },
    setSort(state, action: PayloadAction<ISort>) {
      state.sort = action.payload;
      console.log(action.payload);
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

export const selectFilter = (state: RootState) => state.filterSlice.categoryId;
export const selectSort = (state: RootState) => state.filterSlice.sort;
export const selectSortProperty = (state: RootState) =>
  state.filterSlice.sort.sortProperty;
export const selectCurrentPage = (state: RootState) =>
  state.filterSlice.currentPage;
export const selectSearchValue = (state: RootState) =>
  state.filterSlice.searchValue;

export const {
  setCategoryId,
  setSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
