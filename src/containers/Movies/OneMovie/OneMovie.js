import { Box } from "@mui/system";
import React, { useEffect, useState, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getMoviePrice } from "../../../common/currency";
import { getIdFromSlug } from "../../../common/text";
import DetailTop from "../../../components/onemovies/DetailTop";
import GlobalContext from "../../../context/GlobalContext";
import { getDetailMovie } from "../../../fetcher/movie";

const OneMovie = () => {
  const location = useLocation();
  const movieId = location.pathname;

  const isMovieOwned = useMemo(() => {
    const movieOwnStorage = sessionStorage.getItem("movieOwned");
    if (
      movieOwnStorage &&
      movieOwnStorage.startsWith("[") &&
      JSON.parse(movieOwnStorage)?.length > 0
    ) {
      return JSON.parse(movieOwnStorage)?.includes(getIdFromSlug(movieId));
    } else {
      return false;
    }
  });

  const [movieData, setMovieData] = useState({});
  const [confirmBuy, setConfirmBuy] = useState(false);
  const { user, setUser } = useContext(GlobalContext);
  const [movieOwned, setMovieOwned] = useState(isMovieOwned);

  useEffect(() => {
    getDetailMovie({ id: getIdFromSlug(movieId), language: "en-US" })
      .then((data) => setMovieData(data))
      .catch(() => {});
  }, [movieId]);

  const price = useMemo(() => {
    return getMoviePrice(movieData?.vote_average);
  }, [movieData?.vote_average]);

  const handleBuyTheMovie = () => {
    if (user?.balance >= price) {
      const movieOwnStorage =
        sessionStorage.getItem("movieOwned") &&
        sessionStorage.getItem("movieOwned").startsWith("[");

      if (movieOwnStorage) {
        const movieOwnStorageData = JSON.parse(
          sessionStorage.getItem("movieOwned")
        );

        movieOwnStorageData?.push(getIdFromSlug(movieId));

        sessionStorage.getItem(
          "movieOwned",
          JSON.stringify(movieOwnStorageData)
        );
      } else {
        const movieIdOwned = [getIdFromSlug(movieId)];
        sessionStorage.setItem("movieOwned", JSON.stringify(movieIdOwned));
      }

      setUser((state) => {
        return {
          ...state,
          balance: state?.balance - price,
        };
      });

      const userStorage = JSON.parse(sessionStorage.getItem("user"));
      const updateUserStorage = {
        ...updateUserStorage,
        balance: userStorage?.balance - price,
      };

      sessionStorage.setItem("user", JSON.stringify(updateUserStorage));

      setMovieOwned(true);
    } else {
      setConfirmBuy(false);
    }
  };

  return (
    <Box display="flex" flexDirection="column">
      <DetailTop
        movieData={movieData}
        confirmAction={handleBuyTheMovie}
        price={price}
        setIsOpen={setConfirmBuy}
        setConfirmBuy={setConfirmBuy}
        isOpen={confirmBuy}
        movieOwned={movieOwned}
      />
    </Box>
  );
};

export default OneMovie;
