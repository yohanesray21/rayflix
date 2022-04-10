export const idrFormat = (money) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
};

export const getMoviePrice = (rate) => {
  if (rate >= 1 && rate < 3) {
    return 3500;
  } else if (rate >= 3 && rate < 6) {
    return 7000;
  } else if (rate >= 6 && rate < 9) {
    return 10500;
  } else if (rate >= 9 && rate < 10) {
    return 14000;
  } else {
    return 3500;
  }
};
