import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getTopRatedMovie } from "../../../fetcher/movie";
import MovieList from "../MovieList/MovieList";

const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState({});
  const [page, setPage] = useState(1);
  const [region, setRegion] = useState("id");
  const [dataEmpty, setDataEmpty] = useState(false);

  useEffect(() => {
    getTopRatedMovie({ language: "en-US", page: 1, region: region }).then(
      (data) => {
        setTopRatedMovies(data);
      }
    );
  }, [page, region]);

  return (
    <Box mt={2}>
      <MovieList
        list={topRatedMovies}
        dataEmpty={dataEmpty}
        title="Similar Movies"
      />
    </Box>
  );
};

export default TopRated;
