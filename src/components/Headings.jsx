import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../styles/haeding.css"

const Headings = ({Headings}) => {
  return (
    <Box className="allhead" sx={{ width: "max-content" }} position="relative">
      <Typography
        variant="h1"
        position="relative"
        zIndex="10"
        sx={{
          color: "#FEBE10",
          fontFamily: "'Allison', cursive",
          fontWeight: 900,
        }}
      >
        {Headings}
      </Typography>
      <Box
        className="allheadings"
        sx={{ bgcolor: "#491256", width: "100%", height: "50%" }}
        position="absolute"
        top="0"
        left="0"
        zIndex="99"
      ></Box>
      <Box
        className="allheading"
        sx={{ bgcolor: "#FEBE10", width: "100%", height: "50%" }}
        position="absolute"
        top="0"
        left="0"
        zIndex="98"
      ></Box>
      <Box
        className="allheading-bottom"
        sx={{ bgcolor: "#491256", width: "100%", height: "15%" }}
        position="absolute"
        top="65%"
        right="-10%"
        zIndex="8"
      ></Box>
    </Box>
  );
};

export default Headings;
