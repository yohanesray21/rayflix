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

  const [movieData, setMovieData] = useState({});
  const [confirmBuy, setConfirmBuy] = useState(false);
  const { user, setUser } = useContext(GlobalContext);

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
      setUser((state) => {
        return {
          ...state,
          balance: state?.balance - price,
        };
      });
    }
  };

  return (
    <Box display="flex" flexDirection="column">
      <DetailTop movieData={movieData} />
    </Box>
  );
};

export default OneMovie;
