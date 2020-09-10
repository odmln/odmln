import React from "react"

// Required
import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Box from "../components/Box"
import Container from "../components/Container"
import Flex from "../components/Flex"
import Project from "../components/Project"

// Assets
import challenges from "../images/challenges.png"
import profile from "../images/profile.png"
import trainerChat from "../images/trainerChat.png"
import weeklyPlan from "../images/weeklyPlan.png"
import workoutPlayer from "../images/workoutPlayer.png"

// Page Content
const IndexPage = () => (

  <Layout>
    <SEO
      title="odmln"
      keywords={[`odmln`, `Oliver`, `Dumoulin`, `Oliver Dumoulin`]}
    />
    <Box py={6}>
      <Container
        px={3}
        maxWidth="1600px"
      >
        <Flex
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Project
            width="100%"
            bgColor="gray"
            textColor="text"
            img={profile}
          />
          <Project
            width={["100%", "calc( 50% - 6px )"]}
            bgColor="gray"
            textColor="text"
            img={weeklyPlan}
          />
          <Project
            width={["100%", "calc( 50% - 6px )"]}
            bgColor="gray"
            textColor="text"
            img={workoutPlayer}
          />
          <Project
            width={["100%", "calc( 50% - 6px )"]}
            bgColor="gray"
            textColor="text"
            img={trainerChat}
          />
          <Project
            width={["100%", "calc( 50% - 6px )"]}
            bgColor="gray"
            textColor="text"
            img={challenges}
          />
        </Flex>
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
