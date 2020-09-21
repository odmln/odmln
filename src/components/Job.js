import React from 'react'

import Box from './Box'
import Flex from './Flex'
import StyledLink from './StyledLink'
import Text from './Text'

const Job = props =>

<Flex
  mb={4}
  flexWrap="wrap"
  alignItems="center"
  justifyContent="space-between"
>
  <Box width={["100%", 2/3]}>
    <Text fontSize={2}>
      {props.position} @ <StyledLink href={props.link} title={props.company} target="_blank" rel="noopener noreferrer">{props.company}</StyledLink>
    </Text>
  </Box>
  <Box width={["100%", 1/3]} textAlign={["left", "right"]}>
    <Text fontSize={2} color="text">
      {props.dates}
    </Text>
  </Box>
</Flex>

export default Job
