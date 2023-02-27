import { Box, Typography } from "@mui/material";
import React from "react";
import Headings from "../components/Headings";
import "../styles/profile.css";

const Profile = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-end"
      p={10}
    >
   <Headings Headings="About Me"/>
      <Box className="head" position="relative" p="10">
        <Typography
          className="typo"
          sx={{
            fontFamily: "cursive",
            color: "#FEBE10",
            fontSize: "18px",
            textAlign: "start",
          }}
          p="30px"
        >
          As a MERN (MongoDB, Express, React, Node.js) stack developer, I have
          gained comprehensive knowledge and experience in developing dynamic
          and scalable web applications. My proficiency in utilizing the MERN
          stack allows me to efficiently build full-stack applications, from the
          back-end database to the front-end user interface. With a strong
          foundation in JavaScript, I have gained expertise in creating RESTful
          APIs using Express and Node.js, as well as developing responsive and
          interactive user interfaces with React. I am also skilled in working
          with MongoDB, a NoSQL database, to design and maintain efficient data
          models. Throughout my career, I have demonstrated a keen attention to
          detail and a commitment to delivering high-quality code that adheres
          to industry best practices. I have a passion for keeping up-to-date
          with the latest technologies and tools, and enjoy continuously
          learning and expanding my skills. As a MERN stack developer, I am
          excited to leverage my skills to build innovative and impactful
          applications that deliver exceptional user experiences.
        </Typography>
        <Box
          className="headings"
          sx={{ bgcolor: "#491256", width: "100%", height: "100%" }}
          position="absolute"
          top="0"
          left="3px"
          zIndex="99"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            p={4}
          >
            <Box
              className="skills"
              sx={{
                color: "#FEBE10",
                textAlign: "right",
                fontWeight: 900,
                opacity: 0,
              }}
            >
              <Typography
                variant="h2"
                sx={{ fontFamily: "'Allison', cursive" }}
              >
                Skills
              </Typography>
              <Typography>MongoDB</Typography>
              <Typography>ExpressJS</Typography>
              <Typography>ReactJS</Typography>
              <Typography>NodeJs</Typography>
              <Typography>Material UI</Typography>
              <Typography>Tailwind CSS</Typography>
              <Typography>HTML5</Typography>
              <Typography>JavaScript</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          className="heading"
          sx={{ bgcolor: "#FEBE10", width: "100%", height: "100%" }}
          position="absolute"
          top="0"
          left="0"
          zIndex="98"
        ></Box>
      </Box>
    </Box>
  );
};

export default Profile;
