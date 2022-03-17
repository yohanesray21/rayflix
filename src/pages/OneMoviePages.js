import React from "react";
import OneMovie from "../containers/Movies/OneMovie/OneMovie";
import SimilarMovie from "../containers/Movies/SimilarMovies/SimilarMovie";

const OneMoviePages = () => {
  return (
    <>
      <OneMovie />
      <SimilarMovie />
    </>
  );
};

export default OneMoviePages;
