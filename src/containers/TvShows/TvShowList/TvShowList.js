import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TvShowItem from "./TvShowItem";

const TvShowTrendingList = ({ title, list }) => {
  return (
    <Box p={{ xs: 2, sm: 2, md: 6, lg: 6 }} minHeight="50vh">
      <Box mb={2}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          {title}
        </Typography>
      </Box>
      <Box>
        <Grid
          container
          rowSpacing={{ xs: 4, sm: 3, md: 4, lg: 4 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 2, xl: 2 }}
          justifyContent="flex-start"
          columns={16}
        >
          {list?.results?.map((result) => (
            <Grid item key={result?.id} xs={16} sm={8} md={4} lg={3} xl={2}>
              <TvShowItem result={result} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TvShowTrendingList;
