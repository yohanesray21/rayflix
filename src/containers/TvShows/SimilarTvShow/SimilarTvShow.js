import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getIdTvShowFromSlug } from "../../../common/text";
import { getSimilarTvShow } from "../../../fetcher/movie";
import TvShowTrendingList from "../TvShowList/TvShowList";

const SimilarTvShow = () => {
  let location = useLocation();
  const tvShowId = getIdTvShowFromSlug(location.pathname);
  console.log(tvShowId);
  const [similarTvShow, setSimilarTvShow] = useState({});
  const [page, setPage] = useState(1);
  const [dataEmpty, setDataEmpty] = useState(false);

  useEffect(() => {
    getSimilarTvShow({ id: tvShowId, language: "en-US", page: page }).then(
      (data) => setSimilarTvShow(data)
    );
  }, [tvShowId, page]);
  return (
    <Box mt={2}>
      <TvShowTrendingList
        list={similarTvShow}
        dataEmpty={dataEmpty}
        title="Similar Tv Show"
      />
    </Box>
  );
};

export default SimilarTvShow;
