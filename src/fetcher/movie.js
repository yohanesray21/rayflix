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

export const getDetailMovie = async ({ id, language }) => {
  const url_endpoint = `/movie/${id}`;
  const api_key_endpoint = `?api_key=${API_KEY}`;
  const language_endpoint = language ? `&language=${language}` : "";

  const configRequest = {
    BASE_URL,
    endpoint: `${url_endpoint}${api_key_endpoint}${language_endpoint}`,
  };
  const data = await MakeApiRequest(configRequest);
  return data;
};

export const getSimilarMovie = async ({ id, language, page }) => {
  const url_endpoint = `/movie/${id}/similar`;
  const api_key_endpoint = `?api_key=${API_KEY}`;
  const language_endpoint = language ? `&language=${language}` : "";
  const page_endpoint = page ? `&page=${page}` : "";

  const configRequest = {
    BASE_URL,
    endpoint: `${url_endpoint}${api_key_endpoint}${language_endpoint}${page_endpoint}`,
  };
  const data = await MakeApiRequest(configRequest);
  return data;
};

export const getTopRatedMovie = async ({ language, page, region }) => {
  const url_endpoint = "/movie/top_rated";
  const api_key_endpoint = `?api_key=${API_KEY}`;
  const language_endpoint = language ? `&language=${language}` : "";
  const page_endpoint = page ? `&page=${page}` : "";
  const region_endpoint = region ? `&region=${region}` : "";

  const configRequest = {
    BASE_URL,
    endpoint: `${url_endpoint}${api_key_endpoint}${language_endpoint}${page_endpoint}${region_endpoint}`,
  };

  const data = await MakeApiRequest(configRequest);
  return data;
};
