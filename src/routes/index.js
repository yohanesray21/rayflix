import loadable from "@loadable/component";
import React from "react";
import { Routes, Route } from "react-router-dom";

const TrendingPagesLoad = loadable(() => import("../pages/TrendingPages"));
const OneMoviePagesLoad = loadable(() => import("../pages/OneMoviePages"));

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<TrendingPagesLoad />} />
      <Route path="/:id" element={<OneMoviePagesLoad />} />
    </Routes>
  );
};

export default RoutesApp;
