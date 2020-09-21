import React from "react"

// Required
import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Box from "../components/Box"
import Container from "../components/Container"
import Heading from "../components/Heading"
import Job from "../components/Job"
import Flex from "../components/Flex"

// Page Content
const CvPage = () => (
  <Layout>
    <SEO
      title="CV"
    />
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
            link="https://twitter.com/stash"
            company="Stash"
            dates="Feb 2020 – Present"
          />
          <Job
            position="Product Designer"
            link="https://twitter.com/aaptiv"
            company="Aaptiv"
            dates="Jun 2018 – Feb 2020"
          />
          <Job
            position="Visual Designer"
            link="https://twitter.com/priceline"
            company="Priceline"
            dates="Jun 2017 – Jun 2018"
          />
          <Job
            position="UI/UX Intern"
            link="https://twitter.com/priceline"
            company="Priceline"
            dates="Jun 2016 – Sep 2016"
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
  </Layout>
)

export default CvPage
