import React from 'react'
import styled from '@emotion/styled'

import Box from "./Box"
import Flex from "./Flex"
import StyledLink from "./StyledLink"
import Text from "./Text"

const Foot = styled(Box)`
  position: absolute;
  bottom: 0;
`

const Footer = props =>

<Foot py={4} width={1}>
  <Flex px={4}
    alignItems="center"
    justifyContent="flex-end"
  >
    <Text mx={[2, 3]} fontSize={1}>
      <StyledLink href="mailto:hi@odmln.com" title="hi@odmln.com" target="_blank" rel="noopener noreferrer">hi@odmln.com</StyledLink>
    </Text>
  </Flex>
</Foot>

export default Footer
