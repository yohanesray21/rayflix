import React from "react";
import PopularTvShow from "../containers/TvShows/PopularTvShow";
import SimilarTvShow from "../containers/TvShows/SimilarTvShow/SimilarTvShow";

const TvShowPages = () => {
  return (
    <>
      <PopularTvShow />
      <SimilarTvShow />
    </>
  );
};

export default TvShowPages;
