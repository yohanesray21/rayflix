import loadable from "@loadable/component";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

const HomePagesLoad = loadable(() => import("../pages/HomePages"));
const TopRatedPagesLoad = loadable(() => import("../pages/TopRatedMovies"));
const TvShowsPagesLoad = loadable(() => import("../pages/TvShowPages"));
const TrendingPagesLoad = loadable(() => import("../pages/TrendingPages"));
const OneMoviePagesLoad = loadable(() => import("../pages/OneMoviePages"));
const OneTvShowPagesLoad = loadable(() => import("../pages/OneTvShowPages"));
const ProfilePages = loadable(() => import("../pages/ProfilePages"));

const RoutesApp = () => {
  const [user, setUser] = useState({});

  return (
    <Routes>
      <Route path="/" element={<HomePagesLoad />} />
      <Route path="/trending" element={<TrendingPagesLoad />} />
      <Route path="/film" element={<TopRatedPagesLoad />} />
      <Route path="/tvshow" element={<TvShowsPagesLoad />} />
      <Route path="/:id" element={<OneMoviePagesLoad />} />
      <Route path="/tvshow/:id" element={<OneTvShowPagesLoad />} />
      <Route path="/profile" element={<ProfilePages />} />
    </Routes>
  );
};

export default RoutesApp;
