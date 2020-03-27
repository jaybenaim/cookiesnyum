export const formatPrice = (price, currencySymbol) => {
  const formatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: currencySymbol
  });
  return formatter.format(price);
};
