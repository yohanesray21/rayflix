import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const DetailBottom = ({ movieData }) => {
  console.log(movieData);
  return (
    <Box>
      <Typography>Description</Typography>
      <Typography>{movieData?.overview}</Typography>
      <Typography>Release</Typography>
      <Typography>{movieData?.release_date}</Typography>
      <Typography>Production Company</Typography>
      {movieData?.production_companies?.map((company) => (
        <Typography key={company?.id}>{company?.name}</Typography>
      ))}
      <Typography>Language</Typography>
      {movieData?.spoken_languages?.map((language) => (
        <Typography key={language?.name}>{language?.name}</Typography>
      ))}
      <Typography>Duration</Typography>
      <Typography>{movieData?.runtime} Minutes</Typography>
    </Box>
  );
};

export default DetailBottom;
