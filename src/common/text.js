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
