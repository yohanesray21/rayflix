import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getPopularTvShow } from "../../fetcher/movie";
import TvShowList from "./TvShowList/TvShowList";

const PopularTvShow = () => {
  const [popularTvShow, setPopularTvShow] = useState({});
  const [page, setPage] = useState(2);

  useEffect(() => {
    getPopularTvShow({ language: "en-US", page: page }).then((data) =>
      setPopularTvShow(data)
    );
  }, [page]);

  return (
    <Box mt={2}>
      <TvShowList title="Tv Show" list={popularTvShow} />
    </Box>
  );
};

export default PopularTvShow;
