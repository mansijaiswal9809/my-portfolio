import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "../styles/sidebar.css"
const Sidebar = ({setC}) => {
  return (
    <Box
      height="100vh"
      width="30vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ color: "white" }}
      gap={4}
      borderRight={1}
    >
      <Box
        sx={{
          borderRadius: "50%",
          overflow: "hidden",
          width: "250px",
          height: "250px",
        }}
      >
        <img
          src="mansi.jpg"
          alt=""
          width="250px"
          height="250px"
        />
      </Box>
      <Box position="relative">
        <Box
          className="animated"
          position="absolute"
          top="75px"
          right="-20px"
          width="20vw"
          height="15px"
          sx={{ bgcolor: "#491256", opacity:0.6 }}
          zIndex="0"
        ></Box>
        <Box zIndex="999" position="relative">
          <Typography
            variant="h1"
            sx={{
              color: "#FEBE10",
              fontFamily: "'Allison', cursive",
              fontWeight: 900,
            }}
          >
            Mansi Jaiswal
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <Button sx={{ bgcolor: "#491256" }} onClick={()=>setC(0)}>Profile</Button>
        <Button sx={{ bgcolor: "#491256" }} onClick={()=>setC(1)}>
          Courses And Education
        </Button>
        <Button sx={{ bgcolor: "#491256" }} onClick={()=>setC(2)}>Projects</Button>
        <Button sx={{ bgcolor: "#491256" }} onClick={()=>setC(3)}>Contact Me</Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
