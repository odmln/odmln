import React from 'react'

import Box from "./Box"
import Memoji from "./Memoji"
import Heading from "./Heading"
import Text from "./Text"
import StyledLink from "./StyledLink"


const Home = props =>

<Box pt={8}>
  <Memoji />
  <Heading
    as="h1"
    mb={4}
    fontSize={4}
  > Oliver Dumoulin </Heading>
  <Text
    mb={4}
    fontSize={2}
    maxWidth={["100%", "600px"]}
    style={{
      display: "block"
    }}
  >
    Product designer <StyledLink href="https://twitter.com/stash" title="@stash" target="_blank" rel="noopener noreferrer">@stash</StyledLink>. Previously worked on design systems at <StyledLink href="https://twitter.com/aaptiv" title="@aaptiv" target="_blank" rel="noopener noreferrer">@aaptiv</StyledLink> & <StyledLink href="https://twitter.com/priceline" title="@priceline" target="_blank" rel="noopener noreferrer">@priceline</StyledLink>.
  </Text>
  <Text
    mb={4}
    fontSize={2}
    maxWidth={["100%", "600px"]}
    style={{
      display: "block"
    }}
  >
    <StyledLink href="mailto:hi@odmln.com" title="hi@odmln.com" target="_blank" rel="noopener noreferrer">hi@odmln.com</StyledLink>
  </Text>
</Box>

export default Home
