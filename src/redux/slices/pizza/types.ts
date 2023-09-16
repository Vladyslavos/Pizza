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
  description: string;
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
