import React from 'react'

import Box from "./Box"
import Container from "./Container"
import Memoji from "./Memoji"
import Heading from "./Heading"
import Text from "./Text"
import StyledLink from "./StyledLink"


const Intro = props =>

<Box py={6}>
  <Container
    px={[5, 6]}
    maxWidth="1600px"
    textAlign="center"
  >
    <Memoji />
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
      I'm a product designer <StyledLink href="https://apps.apple.com/us/app/stash-banking-investing-app/id1017148055" title="Stash" target="_blank" rel="noopener noreferrer">@Stash</StyledLink> working on design systems.
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
