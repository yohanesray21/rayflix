import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import { IMAGE_URL } from "../../common/image";

const DetailTop = ({ movieData }) => {
  console.log(movieData);
  return (
    <Box width="100%">
      <Box>
        <Typography>Hello</Typography>
      </Box>
      <Box>
        <img
          src={
            `${IMAGE_URL}` +
            `/${movieData?.backdrop_path ?? movieData?.poster_path}`
          }
          alt={movieData?.title}
          style={{ width: "50%" }}
        />
      </Box>
    </Box>
  );
};

export default DetailTop;
