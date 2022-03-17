import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getIdFromSlug } from "../../../common/text";
import DetailBottom from "../../../components/onemovies/DetailBottom";
import DetailTop from "../../../components/onemovies/DetailTop";
import { getDetailMovie } from "../../../fetcher/movie";

const OneMovie = () => {
  const location = useLocation();
  const movieId = location.pathname;

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    getDetailMovie({ id: getIdFromSlug(movieId), language: "en-US" })
      .then((data) => setMovieData(data))
      .catch(() => {});
  }, [movieId]);

  return (
    <Box display="flex" flexDirection="column">
      <DetailTop movieData={movieData} />
    </Box>
  );
};

export default OneMovie;
