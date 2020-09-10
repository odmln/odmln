import React from 'react'
import styled from '@emotion/styled'

import Box from './Box'
import Flex from './Flex'
import Text from './Text'

const ProjectWrapper = styled(Box)`
  transition: all .15s ease-in-out;
`

const Project = props =>

<ProjectWrapper
  mb={3}
  bg={props.bgColor}
  width={props.width}
  height={["400px", "600px"]}
  backgroundPosition="center"
  backgroundSize="cover"
  style={{
    backgroundImage: `url(${props.img})`
  }}
>
  <Flex
    p={5}
    width="100%"
    maxWidth="468px"
    height="100%"
    alignItems="flex-end"
    justifyContent="flex-start"
  >
    <Text
      color={props.textColor}
      fontSize={2}
    >
      {props.caption}
    </Text>
  </Flex>
</ProjectWrapper>

export default Project
