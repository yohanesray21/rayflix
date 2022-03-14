import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ list }) => {
  console.log(list, "list");
  return (
    <Box>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 3, md: 4, lg: 6 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        justifyContent="center"
        columns={15}
      >
        {list?.results?.map((result) => (
          <Grid item xs={8} sm={6} md={4} lg={3}>
            <MovieItem key={result?.id} result={result} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
