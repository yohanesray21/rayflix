import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { getSlug } from "../../../common/text";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../../common/image";

const TvShowItem = ({ result }) => {
  const navigate = useNavigate();

  const slug = result?.title ? getSlug(result?.title) : getSlug(result?.name);

  return (
    <>
      <Card
        sx={{
          cursor: "pointer",
        }}
        onClick={() => navigate(`/tvshow/${result?.id}-${slug}`)}
      >
        <CardMedia
          component="img"
          image={IMAGE_URL + result?.poster_path}
          alt={result?.title}
          sx={{ minHeight: "280px" }}
        />
        <CardContent sx={{ minHeight: "100px", maxHeight: "100px" }}>
          <Typography>{result?.title ?? result?.name}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default TvShowItem;
