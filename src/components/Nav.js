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
    <StyledLink href="/cv" title="CV" rel="noopener noreferrer">CV</StyledLink>
  </Text>
</Box>

export default Nav
