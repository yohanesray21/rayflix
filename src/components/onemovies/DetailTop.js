import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import React from "react";
import { IMAGE_URL } from "../../common/image";

const DetailTop = ({ movieData }) => {
  return (
    <Box width="100%" display="flex" flexDirection="row" p={10}>
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <Typography variant="h3" component="h1" fontWeight="bold">
          {movieData?.title}
        </Typography>
        <Typography variant="h5" component="p" fontWeight="bold" mt={2}>
          Rp.{movieData?.budget}
        </Typography>
        <Box mt={2}>
          {movieData?.genres?.map((genre) => (
            <Typography variant="h5" component="p" key={genre?.id}>
              {genre?.name}
            </Typography>
          ))}
        </Box>
        <Box>
          <Typography variant="h5" component="p" mt={2}>
            Rating
          </Typography>
          <Typography variant="h5" component="p" mt={2}>
            {movieData?.vote_average}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-start">
          <Button>Buy</Button>
        </Box>
      </Box>
      <Box ml={10} flexGrow={1}>
        <img
          src={
            `${IMAGE_URL}` +
            `/${movieData?.backdrop_path ?? movieData?.poster_path}`
          }
          alt={movieData?.title}
          style={{ width: "50rem" }}
        />
      </Box>
    </Box>
  );
};

export default DetailTop;
