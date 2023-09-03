import { ICartItems } from "../redux/slices/cartSlice";
export const calcTotalPrice = (items: ICartItems[]) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
