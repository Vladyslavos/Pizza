import { RootState } from "../store";
export const selectFilter = (state: RootState) => state.filterSlice.categoryId;
export const selectSort = (state: RootState) => state.filterSlice.sort;
export const selectSortProperty = (state: RootState) =>
  state.filterSlice.sort.sortProperty;
export const selectCurrentPage = (state: RootState) =>
  state.filterSlice.currentPage;
export const selectSearchValue = (state: RootState) =>
  state.filterSlice.searchValue;
