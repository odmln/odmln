import React from 'react'

import Box from "./Box"
import Container from "./Container"
import Memoji from "./Memoji"
import Heading from "./Heading"
import Text from "./Text"
import StyledLink from "./StyledLink"


const Home = props =>

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
      maxWidth={["100%", "600px"]}
    >
      Product designer <StyledLink href="https://twitter.com/stash" title="@stash" target="_blank" rel="noopener noreferrer">@stash</StyledLink>. Previously worked on design systems at <StyledLink href="https://twitter.com/aaptiv" title="@aaptiv" target="_blank" rel="noopener noreferrer">@aaptiv</StyledLink> & <StyledLink href="https://twitter.com/priceline" title="@priceline" target="_blank" rel="noopener noreferrer">@priceline</StyledLink>.
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

export default Home
