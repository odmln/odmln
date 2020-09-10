import React from 'react'

import Box from "./Box"
import StyledLink from "./StyledLink"
import Text from "./Text"

const Nav = props =>

<Box>
  <Text
    ml={[0, 4]}
    mr={[3, 0]}
    fontSize={2}
  >
    <StyledLink href="https://twitter.com/odmln" title="Twitter" target="_blank" rel="noopener noreferrer">twitter</StyledLink>
  </Text>
  <Text
    ml={[0, 4]}
    mr={[3, 0]}
    fontSize={2}
  >
    <StyledLink href="https://dribbble.com/odmln" title="Dribbble" target="_blank" rel="noopener noreferrer">dribbble</StyledLink>
  </Text>
  <Text
    ml={[0, 4]}
    mr={[3, 0]}
    fontSize={2}
  >
    <StyledLink href="https://github.com/odmln" title="Github" target="_blank" rel="noopener noreferrer">github</StyledLink>
  </Text>
</Box>

export default Nav
