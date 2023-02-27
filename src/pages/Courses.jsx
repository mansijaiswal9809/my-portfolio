import { Box } from '@mui/material'
import React from 'react'
import Headings from '../components/Headings'

const Courses = () => {
  return (
    <Box  width="100%"
    height="100%"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="flex-end"
    p={10}>
        <Headings Headings="Courses And Education"/>
    </Box>
  )
}

export default Courses
