import { Box } from "@mui/system";
import React from "react";
import Courses from "../pages/Courses";
import Profile from "../pages/Profile";
import "../styles/sidebar.css";

const ThreeD = ({ c }) => {
  return (
    <Box>
      <Box
        className="Rotate"
        width="70vw"
        height="100vh"
        sx={{
          transformStyle: "preserve-3d",
          color: "white",
          transform: `rotateX(${c * 90}deg)`,
          transition: "all 1s",
        }}
        position="relative"
        // boxSizing="border-box"
      >
        <Box
          width="70vw"
          height="100vh"
          position="absolute"
          top="0"
          left="0"
          // boxSizing="border-box"
          sx={{
            transform: "translateZ(50vh)",
            textAlign: "center",
            backfaceVisibility: "hidden",
            // border: "12px solid white",
          }}
        >
          <Profile/>
        </Box>
        <Box
          width="70vw"
          height="100vh"
          position="absolute"
          top="0"
          left="0"
          sx={{
            transform: "translateZ(50vh) rotateX(180deg)",
            backfaceVisibility: "hidden",
            border: "12px solid white",
          }}
        >
          Back
        </Box>
        <Box
          width="70vw"
          height="100vh"
          position="absolute"
          bottom="100vh"
          left="0"
          sx={{
            transform: "rotateX(90deg)",
            backfaceVisibility: "hidden",
            border: "12px solid white",
          }}
        >
          Top
        </Box>
        <Box
          width="70vw"
          height="100vh"
          position="absolute"
          top="100vh"
          left="0"
          sx={{
            transform: "rotateX(-90deg)",
            backfaceVisibility: "hidden",
            // border: "12px solid white",
          }}
        >
          <Courses/>
        </Box>
      </Box>
    </Box>
  );
};

export default ThreeD;
