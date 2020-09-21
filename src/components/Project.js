import React from 'react'
import styled from '@emotion/styled'

import Box from './Box'
import Flex from './Flex'
import Text from './Text'

const ProjectWrapper = styled(Box)`
  
`

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
  <ProjectWrapper
    bg={props.bgColor}
    width={props.width}
    height={["400px", "600px"]}
    backgroundPosition="center"
    backgroundSize="cover"
    style={{
      backgroundImage: `url(${props.img})`
    }}
  ></ProjectWrapper>
</Box>

export default Project
