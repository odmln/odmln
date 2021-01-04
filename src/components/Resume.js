import React from 'react'

import Box from "./Box"
import Container from "./Container"
import Heading from "./Heading"
import Flex from "./Flex"
import Job from "./Job"


const Resume = props =>

<Box py={6}>
  <Container
    px={[5, 6]}
    maxWidth="1600px"
  >
    <Heading
      as="h1"
      mb={6}
      fontSize={4}
    > Experience </Heading>
    <Flex
      width="100%"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Job
        position="Product Designer"
        link="https://www.onepeloton.com"
        company="Peloton"
        dates="Jan 2021 – Present"
      />
      <Job
        position="Product Designer"
        link="https://www.stash.com"
        company="Stash"
        dates="Feb 2020 – Jan 2021"
      />
      <Job
        position="Product Designer"
        link="https://aaptiv.com"
        company="Aaptiv"
        dates="Jun 2018 – Feb 2020"
      />
      <Job
        position="Visual Designer"
        link="https://priceline.com"
        company="Priceline"
        dates="Jun 2017 – Jun 2018"
      />
    </Flex>

    <Heading
      as="h1"
      my={6}
      fontSize={4}
    > Education </Heading>
    <Flex
      width="100%"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Job
        position="BA, Graphic Design"
        link="https://scad.edu"
        company="SCAD"
        dates="Class of 2017"
      />
    </Flex>
  </Container>
</Box>

export default Resume
