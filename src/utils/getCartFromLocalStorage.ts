import { calcTotalPrice } from "./calcTotalPrice";
import { ICartItems } from "../redux/slices/cart/types";
export const getCartFromLs = () => {
  const data = localStorage.getItem("cart");
  const items = data ? (JSON.parse(data) as ICartItems[]) : [];
  const totalPrice = calcTotalPrice(items);

  return { items, totalPrice };
};
