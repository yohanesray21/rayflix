// https://api.themoviedb.org/3/movie/550?api_key=fe674a87b947457f4759f8a145b04611

import axios from "axios";

export const MakeApiRequest = async ({ BASE_URL, endpoint, options }) => {
  try {
    const response = await axios.get(BASE_URL + endpoint, { options });
    return response.data;
  } catch (err) {
    if (err.response?.data) {
      alert(JSON.stringify(err.response.data));
    } else {
      alert(JSON.stringify(err));
    }
  }
};
