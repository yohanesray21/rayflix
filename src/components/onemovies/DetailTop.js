import { Box } from "@mui/system";
import { Button, Chip, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { IMAGE_URL } from "../../common/image";
import { timeConvert } from "../../common/time";

const DetailTop = ({ movieData }) => {
  const title = movieData?.title;
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="row"
      py={10}
      px={6}
      justifyContent="center"
      color="primary"
      bgcolor="#edf2f7"
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
          {title}
        </Typography>
        <Box>
          <Typography variant="h6" component="p" fontWeight="bold" mt={2}>
            Rp.{movieData?.budget}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            mt={2}
            sx={{ textDecorationLine: "underline" }}
          >
            DESCRIPTION
          </Typography>
          <Typography variant="h6">{movieData?.overview}</Typography>
        </Box>

        <Box mt={2} display="flex" flexDirection="row" justifyContent="center">
          {movieData?.genres?.map((genre) => (
            <Chip key={genre?.id} label={genre?.name} sx={{ mr: 2 }} />
          ))}
        </Box>

        <Box display="flex" alignItems="center" mt={1}>
          <Typography variant="h6" sx={{ textDecorationLine: "underline" }}>
            DURATION
          </Typography>
          <span style={{ textDecorationLine: "none", marginLeft: 16 }}>:</span>
          <Typography variant="h6" ml={2}>
            {timeConvert(movieData?.runtime)}
          </Typography>
        </Box>
        <Box display="flex" mt={1} alignItems="center">
          <Typography variant="h6" sx={{ textDecorationLine: "underline" }}>
            LANGUAGE
          </Typography>
          <span style={{ textDecorationLine: "none", marginLeft: 8 }}>:</span>
          <ul style={{ display: "flex" }}>
            {movieData?.spoken_languages?.map((language) => (
              <li style={{ marginRight: 25 }}>
                <Typography variant="h6">{language?.name}</Typography>
              </li>
            ))}
          </ul>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h6"
            component="p"
            mt={1}
            sx={{ textDecorationLine: "underline" }}
          >
            RATINGs
          </Typography>
          <Rating
            name="read-only"
            value={movieData?.vote_average / 2}
            readOnly
            sx={{ mt: 2 }}
          />
          <Typography variant="h6" component="p" fontWeight="bold" mt={2}>
            {movieData?.vote_average}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailTop;
