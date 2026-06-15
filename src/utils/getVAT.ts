import { roundMoney } from "./roundMoney";

export const getVAT = (subtotal: number, vatRate: number) => {
  return roundMoney((vatRate * subtotal) / 100);
};
