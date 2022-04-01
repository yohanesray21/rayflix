import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getIdFromSlug } from "../../../common/text";
import { getSimilarTvShow } from "../../../fetcher/movie";

const SimilarTvShow = () => {
  let location = useLocation();
  const tvShowId = getIdFromSlug(location.pathname);
  const [similarTvShow, setSimilarTvShow] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    getSimilarTvShow({ id: tvShowId, language: "en-US", page: page });
  });
  return <div>SimilarTvShow UPdate</div>;
};

export default SimilarTvShow;
