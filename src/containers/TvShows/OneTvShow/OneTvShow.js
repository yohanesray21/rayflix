import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getIdTvShowFromSlug } from "../../../common/text";
import DetailTopTvShow from "../../../components/oneTvShow/DetailTopTvShow";
import { getDetailTvShow } from "../../../fetcher/movie";

const OneTvShow = () => {
  const location = useLocation();
  const tvShowId = getIdTvShowFromSlug(location.pathname);

  const [tvShowData, setTvShowData] = useState({});

  useEffect(() => {
    getDetailTvShow({ id: tvShowId }).then((data) => setTvShowData(data));
  }, [tvShowId]);

  return (
    <Box>
      <DetailTopTvShow tvShowData={tvShowData} />
    </Box>
  );
};

export default OneTvShow;
