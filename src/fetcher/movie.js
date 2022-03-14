import { MakeApiRequest } from "../module/MakeApiRequest";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "fe674a87b947457f4759f8a145b04611";

export const getTrendingMovies = async ({ page }) => {
  const url_endpoint = "/trending/all/day";
  const api_key_endpoint = `?api_key=${API_KEY}`;
  const page_endpoint = page ? `&page=${page}` : "";

  const configRequest = {
    BASE_URL,
    endpoint: `${url_endpoint}${api_key_endpoint}${page_endpoint}`,
  };

  const data = await MakeApiRequest(configRequest);
  return data;
};
