import React from "react";
import TopRated from "../containers/Movies/TopRated/TopRated";
import TrendingList from "../containers/Movies/TrendingList/TrendingList";

const HomePages = () => {
  return (
    <>
      <TopRated />
      <TrendingList />
    </>
  );
};

export default HomePages;
