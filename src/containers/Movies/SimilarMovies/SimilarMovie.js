import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getIdFromSlug } from "../../../common/text";
import { getSimilarMovie } from "../../../fetcher/movie";
import MovieList from "../MovieList/MovieList";

const SimilarMovie = () => {
  let location = useLocation();
  const movieId = getIdFromSlug(location.pathname);

  const [similarMoviesData, setSimilarMoviesData] = useState({});
  const [page, setPage] = useState(1);
  const [dataEmpty, setDataEmpty] = useState(false);

  useEffect(() => {
    getSimilarMovie({ id: movieId, language: "en-US", page }).then((data) => {
      setSimilarMoviesData(data);
    });
  }, [movieId, page]);

  return (
    <Box mt={2}>
      <MovieList
        list={similarMoviesData}
        dataEmpty={dataEmpty}
        title="Similar Movies"
      />
    </Box>
  );
};

export default SimilarMovie;
