import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: { name: "popularity", sortProperty: "popularity" },
};

export const filterSlice = createSlice({
  searchValue: "",
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
      console.log(action.payload);
    },
    setSort(state, action) {
      state.sort = action.payload;
      console.log(action.payload);
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.currentPage);
      state.currentPage = Number(action.payload.currentPage);
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filterSlice.categoryId;
export const selectSort = (state) => state.filterSlice.sort;
export const selectSortProperty = (state) =>
  state.filterSlice.sort.sortProperty;
export const selectCurrentPage = (state) => state.filterSlice.currentPage;
export const selectSearchValue = (state) => state.filterSlice.searchValue;

export const {
  setCategoryId,
  setSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
