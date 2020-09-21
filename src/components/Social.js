import React from 'react'

import Box from "./Box"
import Container from "./Container"
import Text from "./Text"
import StyledLink from "./StyledLink"


const Social = props =>

<Box py={6}>
  <Container
    px={[5, 6]}
    maxWidth="1600px"
    textAlign="center"
  >
    <Text
      mb={4}
      mx="auto"
      fontSize={2}
      maxWidth={["100%", "600px"]}
    >
      <StyledLink href="https://twitter.com/odmln" title="@odmln" target="_blank" rel="noopener noreferrer">@twitter</StyledLink>
      <StyledLink ml={3} href="https://dribbble.com/odmln" title="@odmln" target="_blank" rel="noopener noreferrer">@dribbble</StyledLink>
      <StyledLink ml={3} href="https://github.com/odmln" title="@odmln" target="_blank" rel="noopener noreferrer">@github</StyledLink>
    </Text>
  </Container>
</Box>

export default Social
