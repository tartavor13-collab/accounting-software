export const calculateGST = (amount: number, gstRate: number): number => {
  return (amount * gstRate) / 100;
};

export const calculateTotalWithGST = (amount: number, gstRate: number): number => {
  return amount + calculateGST(amount, gstRate);
};

export const calculateDiscount = (price: number, discountPercent: number): number => {
  return (price * discountPercent) / 100;
};

export const calculateDiscountedPrice = (price: number, discountPercent: number): number => {
  return price - calculateDiscount(price, discountPercent);
};

export const calculateProfit = (selling: number, cost: number): number => {
  return selling - cost;
};

export const calculateProfitMargin = (selling: number, cost: number): number => {
  return ((selling - cost) / selling) * 100;
};

export const calculateMarkup = (selling: number, cost: number): number => {
  return ((selling - cost) / cost) * 100;
};
