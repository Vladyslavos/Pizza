import { ICartItems } from "../redux/slices/cart/types";
export const calcTotalPrice = (items: ICartItems[]) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
