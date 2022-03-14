import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../../../fetcher/movie";
import MovieList from "../MovieList/MovieList";

const TrendingList = () => {
  const [trendingData, setTrendingData] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTrendingMovies({ page }).then((data) => setTrendingData(data));
  }, [page]);

  return (
    <Box mt={2}>
      <MovieList list={trendingData} />
      {console.log(trendingData)}
    </Box>
  );
};

export default TrendingList;
