import loadable from "@loadable/component";
import React from "react";
import { Routes, Route } from "react-router-dom";

const HomePagesLoad = loadable(() => import("../pages/HomePages"));
const TopRatedPagesLoad = loadable(() => import("../pages/TopRatedMovies"));
const TrendingPagesLoad = loadable(() => import("../pages/TrendingPages"));
const OneMoviePagesLoad = loadable(() => import("../pages/OneMoviePages"));

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePagesLoad />} />
      <Route path="/trending" element={<TrendingPagesLoad />} />
      <Route path="/film" element={<TopRatedPagesLoad />} />
      <Route path="/:id" element={<OneMoviePagesLoad />} />
    </Routes>
  );
};

export default RoutesApp;
