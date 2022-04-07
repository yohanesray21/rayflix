import { Box } from "@mui/system";
import { Chip, Rating, Typography } from "@mui/material";
import React from "react";
import { IMAGE_URL } from "../../common/image";
import { timeConvert } from "../../common/time";
import { DataGrid } from "@mui/x-data-grid";
import { priceConversion } from "../../common/text";

const DetailTop = ({ movieData }) => {
  const title = movieData?.title;
  return (
    <Box
      width="100%"
      display="flex"
      py={{ xs: 2, md: 8 }}
      px={{ xs: 0, md: 6 }}
      justifyContent="center"
      color="primary"
      bgcolor="#edf2f7"
    >
      <Box
        sx={{
          display: {
            xs: "none",
            lg: "flex",
            flexDirection: "row",
          },
        }}
        maxHeight="50vh"
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
        <Box display="flex" flexDirection="column" overflow="auto">
          <Typography variant="h4" component="h1" fontWeight="bold">
            {title}
          </Typography>
          <Box>
            <Typography variant="h6" component="p" fontWeight="bold" mt={2}>
              Rp.{priceConversion(movieData?.budget)}
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

          <Box
            mt={2}
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            {movieData?.genres?.map((genre) => (
              <Chip key={genre?.id} label={genre?.name} sx={{ mr: 2 }} />
            ))}
          </Box>

          <Box display="flex" alignItems="center" mt={1}>
            <Typography variant="h6" sx={{ textDecorationLine: "underline" }}>
              DURATION
            </Typography>
            <span style={{ textDecorationLine: "none", marginLeft: 16 }}>
              :
            </span>
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h6"
              component="p"
              mt={1}
              sx={{ textDecorationLine: "underline" }}
            >
              RATING
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

      <Box
        sx={{
          display: {
            xs: "flex",
            lg: "none",
            flexDirection: "column",
          },
        }}
      >
        <Box mr={5}>
          <img
            src={
              `${IMAGE_URL}` +
              `/${movieData?.backdrop_path ?? movieData?.poster_path}`
            }
            alt={movieData?.title}
            style={{ maxWidth: "110%" }}
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
              max
            >
              DESCRIPTION
            </Typography>
            <Typography variant="h6">{movieData?.overview}</Typography>
          </Box>

          <Box
            mt={2}
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            {movieData?.genres?.map((genre) => (
              <Chip key={genre?.id} label={genre?.name} sx={{ mr: 2 }} />
            ))}
          </Box>

          <Box display="flex" alignItems="center" mt={1}>
            <Typography variant="h6" sx={{ textDecorationLine: "underline" }}>
              DURATION
            </Typography>
            <span style={{ textDecorationLine: "none", marginLeft: 16 }}>
              :
            </span>
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h6"
              component="p"
              mt={1}
              sx={{ textDecorationLine: "underline" }}
            >
              RATING
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
    </Box>
  );
};

export default DetailTop;
