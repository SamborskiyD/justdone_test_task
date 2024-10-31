const currencies: Record<string, string> = {
  USD: "$",
};

export const formatPrice = (price: number, currency: string) => {
  return currencies[currency] + (price / 100).toFixed(2);
};
