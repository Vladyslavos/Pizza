export interface ICartItems {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
}

export interface ICartState {
  totalPrice: number;
  items: ICartItems[];
}
