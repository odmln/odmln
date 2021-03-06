import React from 'react'

import Box from "./Box"
import Container from "./Container"
import Memoji from "./Memoji"
import Heading from "./Heading"
import Text from "./Text"
import StyledLink from "./StyledLink"


const Intro = props =>

<Box py={8}>
  <Container
    px={[5, 6]}
    maxWidth="1600px"
    textAlign="center"
  >
    <Heading
      as="h1"
      mb={4}
      mx="auto"
      fontSize={4}
      maxWidth={["100%", "600px"]}
    > Oliver Dumoulin </Heading>
    <Text
      mb={4}
      mx="auto"
      fontSize={2}
      maxWidth={["100%", "768px"]}
    >
      I'm a Senior UI Designer <StyledLink href="https://www.onepeloton.com" title="onepeloton.com" target="_blank" rel="noopener noreferrer">@Peloton</StyledLink>. I previously led design systems efforts at <StyledLink href="https://www.stash.com" title="stash.com" target="_blank" rel="noopener noreferrer">@Stash</StyledLink>, <StyledLink href="https://www.aaptiv.com" title="aaptiv.com" target="_blank" rel="noopener noreferrer">@Aaptiv</StyledLink> and <StyledLink href="https://www.priceline.com" title="priceline.com" target="_blank" rel="noopener noreferrer">@Priceline</StyledLink>.
    </Text>
    <Text
      mb={4}
      mx="auto"
      fontSize={2}
      maxWidth={["100%", "600px"]}
    >
      <StyledLink href="mailto:hi@odmln.com" title="hi@odmln.com" target="_blank" rel="noopener noreferrer">hi@odmln.com</StyledLink>
    </Text>
  </Container>
</Box>

export default Intro
