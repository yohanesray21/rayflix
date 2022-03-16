import { Box } from "@mui/system";
import { Button, Chip, Rating, Typography } from "@mui/material";
import React from "react";
import { IMAGE_URL } from "../../common/image";
import { timeConvert } from "../../common/time";

const DetailTop = ({ movieData }) => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="row"
      py={10}
      pl={6}
      justifyContent="center"
    >
      <Box mr={5}>
        <img
          src={
            `${IMAGE_URL}` +
            `/${movieData?.backdrop_path ?? movieData?.poster_path}`
          }
          alt={movieData?.title}
          style={{ width: "50rem" }}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography variant="h4" component="h1" fontWeight="bold">
          {movieData?.title}
        </Typography>
        <Typography variant="h6" component="p" fontWeight="bold" mt={2}>
          Rp.{movieData?.budget}
        </Typography>
        <Box mt={2} display="flex" flexDirection="row" justifyContent="center">
          {movieData?.genres?.map((genre) => (
            <Chip key={genre?.id} label={genre?.name} sx={{ mr: 2 }} />
          ))}
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="p" mt={2}>
            Rating
          </Typography>
          <Rating
            name="read-only"
            value={movieData?.vote_average / 2}
            readOnly
            sx={{ mt: 2 }}
          />
          <Typography variant="h6" component="p" mt={2}>
            {movieData?.vote_average}
          </Typography>
        </Box>
        <Typography variant="h6" mt={2}>
          Description
        </Typography>
        <Typography variant="h6">{movieData?.overview}</Typography>
        <Typography variant="h6">{timeConvert(movieData?.runtime)}</Typography>
      </Box>
    </Box>
  );
};

export default DetailTop;
