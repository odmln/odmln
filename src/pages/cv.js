import React from "react"

// Required
import SEO from "../components/seo"

// Components
import Box from "../components/Box"
import Container from "../components/Container"
import Heading from "../components/Heading"
import Job from "../components/Job"
import Flex from "../components/Flex"

// Page Content
const Cv = () => (

  <Container
    px={3}
    maxWidth="1600px"
    >
    <Box
      width="100%">
      <Heading
        as="h1"
        mb={4}
        fontSize={4}
      > Oliver Dumoulin </Heading>
      <Flex
        width="100%"
        justifyContent="space-between"
        flexDirection="column"
      >
        <Container
          px={[5, 6]}
          maxWidth="1600px"
        >
          <Job
            position="product designer"
            link="https://twitter.com/stash"
            company="stash"
            dates="feb 2020 – present"
          />
          <Job
            position="product designer"
            link="https://twitter.com/stash"
            company="stash"
            dates="feb 2020 – present"
          />
          <Job
            position="product designer"
            link="https://twitter.com/stash"
            company="stash"
            dates="feb 2020 – present"
          />
          <Job
            position="product designer"
            link="https://twitter.com/stash"
            company="stash"
            dates="feb 2020 – present"
          />
        </Container>
      </Flex>
    </Box>
  </Container>
)

export default Cv
