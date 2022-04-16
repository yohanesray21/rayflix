import loadable from "@loadable/component";
import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { isAuthenticatedValidation } from "../common/auth";
import { ModalValidation } from "../components/modal/ModalValidation";
import SimpleProfile from "../containers/Profile/SimpleProfile";
import GlobalContext from "../context/GlobalContext";

const HomePagesLoad = loadable(() => import("../pages/HomePages"));
const TopRatedPagesLoad = loadable(() => import("../pages/TopRatedMovies"));
const TvShowsPagesLoad = loadable(() => import("../pages/TvShowPages"));
const TrendingPagesLoad = loadable(() => import("../pages/TrendingPages"));
const OneMoviePagesLoad = loadable(() => import("../pages/OneMoviePages"));
const OneTvShowPagesLoad = loadable(() => import("../pages/OneTvShowPages"));
const ProfilePages = loadable(() => import("../pages/ProfilePages"));

const RoutesApp = () => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(
    isAuthenticatedValidation()
  );

  const handleSubmitAuth = useCallback((fullname) => {
    if (fullname) {
      const userData = {
        fullname,
        balance: 100000,
      };

      sessionStorage.setItem("user", JSON.stringify(userData));
      setIsAuthenticated(true);
      window.location.reload(); // temporary
    } else {
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setUser(JSON.parse(sessionStorage.getItem("user")));
    } else {
      setUser({});
    }
  }, [isAuthenticated]);

  return (
    <>
      <ModalValidation
        isOpen={!isAuthenticated}
        handleSubmitAuth={handleSubmitAuth}
      />

      <GlobalContext.Provider value={{ user, setUser }}>
        {isAuthenticated && <SimpleProfile />}

        <Routes>
          <Route path="/" element={<HomePagesLoad />} />
          <Route path="/trending" element={<TrendingPagesLoad />} />
          <Route path="/film" element={<TopRatedPagesLoad />} />
          <Route path="/tvshow" element={<TvShowsPagesLoad />} />
          <Route path="/:id" element={<OneMoviePagesLoad />} />
          <Route path="/tvshow/:id" element={<OneTvShowPagesLoad />} />
          <Route path="/profile" element={<ProfilePages />} />
        </Routes>
      </GlobalContext.Provider>
    </>
  );
};

export default RoutesApp;
