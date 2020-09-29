import React from 'react'

import Box from './Box'

const Project = props =>

<Box
  mb={3}
  width={props.frame}
  height={["400px", "600px"]}
  backgroundPosition="center"
  style={{
    overflow: "hidden"
  }}
>
  <Box
    bg={props.bgColor}
    width={props.width}
    height={["400px", "600px"]}
    backgroundPosition="center"
    backgroundSize="cover"
    style={{
      backgroundImage: `url(${props.img})`
    }}
  ></Box>
</Box>

export default Project
