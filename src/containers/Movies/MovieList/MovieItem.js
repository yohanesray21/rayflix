import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

const MovieItem = ({ result }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={IMAGE_URL + result?.poster_path}
        alt={result?.title}
      />
      <CardContent sx={{ height: "100px" }} wrap>
        <Typography>{result?.title ?? result?.name}</Typography>
        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Button>Buy</Button>
          <Button>Description</Button>
        </Box>
      </CardContent>
      {/* <CardActions >
        
      </CardActions> */}
    </Card>
  );
};

export default MovieItem;
