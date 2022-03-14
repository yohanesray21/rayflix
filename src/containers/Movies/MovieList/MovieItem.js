import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

const MovieItem = ({ result }) => {
  const navigate = useNavigate();

  // const slug = result?.title ?

  return (
    <Card sx={{ cursor: "pointer" }} onClick={() => console.log("test")}>
      <CardMedia
        component="img"
        image={IMAGE_URL + result?.poster_path}
        alt={result?.title}
        height={300}
      />
      <CardContent sx={{ height: "100px" }}>
        <Typography>{result?.title ?? result?.name}</Typography>
      </CardContent>
      {/* <CardActions >
          
        </CardActions> */}
    </Card>
  );
};

export default MovieItem;
