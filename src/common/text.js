export const getSlug = (text) => {
  return text?.split(" ").join("-");
};

export const getIdFromSlug = (text) => {
  return text?.split("-")[0];
};
