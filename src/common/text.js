export const getSlug = (text) => {
  return text?.split(" ").join("-");
};

export const getIdFromSlug = (text) => {
  return text?.split("-")[0];
};

export const getIdTvShowFromSlug = (text) => {
  text = text?.split("/")[2];
  return text?.split("-")[0];
};

export const priceConversion = (price) => {
  // var reverse = price.toString().split("").reverse().join("");
  // let ribuan = reverse.match(/\d{1,3}/g);
  // ribuan = ribuan.join(".").split("").reverse().join("");
  // console.log(ribuan);
  // return ribuan;

  return price;
};
