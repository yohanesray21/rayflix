import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { getSlug } from "../../../common/text";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../../common/image";
import { getMoviePrice, idrFormat } from "../../../common/currency";

const MovieItem = ({ result }) => {
  const navigate = useNavigate();

  const slug = result?.title ? getSlug(result?.title) : getSlug(result?.name);

  const price = useMemo(() => {
    return getMoviePrice(result?.vote_average);
  }, [result?.vote_average]);

  return (
    <>
      <Card
        sx={{
          cursor: "pointer",
          position: "relative",
          pb: 2,
        }}
        onClick={() => navigate(`/${result?.id}-${slug}`)}
      >
        <CardMedia
          component="img"
          image={IMAGE_URL + result?.poster_path}
          alt={result?.title}
          sx={{ minHeight: "280px" }}
        ></CardMedia>
        <CardContent sx={{ position: "absolute", top: "1px" }}>
          <Typography
            variant="body1"
            component="p"
            color="primary.light"
            bgcolor="red"
            fontWeight="bold"
            p={1}
          >
            {idrFormat(price).replace("Rp", "IDR")}
          </Typography>
        </CardContent>
        <CardContent sx={{ minHeight: "100px", maxHeight: "100px" }}>
          <Typography>{result?.title ?? result?.name}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default MovieItem;
