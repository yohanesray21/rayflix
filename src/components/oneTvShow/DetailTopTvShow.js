import { Box } from "@mui/system";
import { Chip, Rating, Typography } from "@mui/material";
import React from "react";
import { IMAGE_URL } from "../../common/image";
import { timeConvert } from "../../common/time";

const DetailTopTvShow = ({ tvShowData }) => {
  const title = tvShowData?.title;
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
              `/${tvShowData?.backdrop_path ?? tvShowData?.poster_path}`
            }
            alt={tvShowData?.title}
            style={{
              minWidth: "20rem",
              maxWidth: "50rem",
              minHeight: "10rem",
              maxHeight: "30rem",
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" overflow="auto">
          <Typography variant="h4" component="h1" fontWeight="bold">
            {title}
          </Typography>
          <Box>
            <Typography variant="h6" component="p" fontWeight="bold" mt={2}>
              Rp.{tvShowData?.budget}
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
            <Typography variant="h6">{tvShowData?.overview}</Typography>
          </Box>

          <Box
            mt={2}
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            {tvShowData?.genres?.map((genre) => (
              <Chip key={genre?.id} label={genre?.name} sx={{ mr: 2 }} />
            ))}
          </Box>

          <Box display="flex" alignItems="center" mt={1}>
            <Typography variant="h6" sx={{ textDecorationLine: "underline" }}>
              EPISODE
            </Typography>
            <span style={{ textDecorationLine: "none", marginLeft: 16 }}>
              :
            </span>
            <Typography variant="h6" ml={2}>
              {tvShowData.episode_run_time}
              hello
            </Typography>
          </Box>
          <Box display="flex" mt={1} alignItems="center">
            <Typography variant="h6" sx={{ textDecorationLine: "underline" }}>
              LANGUAGE
            </Typography>
            <span style={{ textDecorationLine: "none", marginLeft: 8 }}>:</span>
            <ul style={{ display: "flex" }}>
              {tvShowData?.spoken_languages?.map((language) => (
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
              value={tvShowData?.vote_average / 2}
              readOnly
              sx={{ mt: 2 }}
            />
            <Typography variant="h6" component="p" fontWeight="bold" mt={2}>
              {tvShowData?.vote_average}
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
              `/${tvShowData?.backdrop_path ?? tvShowData?.poster_path}`
            }
            alt={tvShowData?.title}
            style={{ maxWidth: "110%" }}
          />
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography variant="h4" component="h1" fontWeight="bold">
            {title}
          </Typography>
          <Box>
            <Typography variant="h6" component="p" fontWeight="bold" mt={2}>
              Rp.{tvShowData?.budget}
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
            <Typography variant="h6">{tvShowData?.overview}</Typography>
          </Box>

          <Box
            mt={2}
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            {tvShowData?.genres?.map((genre) => (
              <Chip key={genre?.id} label={genre?.name} sx={{ mr: 2 }} />
            ))}
          </Box>

          <Box display="flex" alignItems="center" mt={1}>
            <Typography variant="h6" sx={{ textDecorationLine: "underline" }}>
              EPISODE
            </Typography>
            <span style={{ textDecorationLine: "none", marginLeft: 16 }}>
              :
            </span>
            <Typography variant="h6" ml={2}>
              {tvShowData.episode_run_time}
            </Typography>
          </Box>
          <Box display="flex" mt={1} alignItems="center">
            <Typography variant="h6" sx={{ textDecorationLine: "underline" }}>
              LANGUAGE
            </Typography>
            <span style={{ textDecorationLine: "none", marginLeft: 8 }}>:</span>
            <ul style={{ display: "flex" }}>
              {tvShowData?.spoken_languages?.map((language) => (
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
              value={tvShowData?.vote_average / 2}
              readOnly
              sx={{ mt: 2 }}
            />
            <Typography variant="h6" component="p" fontWeight="bold" mt={2}>
              {tvShowData?.vote_average}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailTopTvShow;
