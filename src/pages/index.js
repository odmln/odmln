import React from "react"

// Required
import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Box from "../components/Box"
import Container from "../components/Container"
import Flex from "../components/Flex"
import Project from "../components/Project"
import Intro from "../components/Intro"
import Resume from "../components/Resume"

// Assets
import challenges from "../images/challenges.png"
import stashDocs from "../images/stashDocs.png"
import backupInvestment from "../images/backupInvestment.png"
import runway from "../images/runway.png"
import cardActivation from "../images/cardActivation.png"
import profile from "../images/profile.png"
import trainerChat from "../images/trainerChat.png"
import weeklyPlan from "../images/weeklyPlan.png"
import workoutPlayer from "../images/workoutPlayer.png"
import pricelineDocs from "../images/pricelineDocs.png"
import pricelineNav from "../images/pricelineNav.png"

// Page Content
const IndexPage = () => (

  <Layout>
    <SEO
      title="odmln"
      keywords={[`odmln`, `Oliver`, `Dumoulin`, `Oliver Dumoulin`]}
    />
    <Intro />
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
            width={1}
            frame={1}
            bgColor="gray"
            textColor="text"
            img={cardActivation}
          />
          <Project
            width={1}
            frame={["100%", "calc(50% - 8px)"]}
            bgColor="gray"
            textColor="text"
            img={backupInvestment}
          />
          <Project
            width={1}
            frame={["100%", "calc(50% - 8px)"]}
            bgColor="gray"
            textColor="text"
            img={stashDocs}
          />
          <Project
            width={1}
            frame={1}
            bgColor="gray"
            textColor="text"
            img={runway}
          />
          <Project
            width={1}
            frame={["100%", "calc(50% - 8px)"]}
            bgColor="gray"
            textColor="text"
            img={weeklyPlan}
          />
          <Project
            width={1}
            frame={["100%", "calc(50% - 8px)"]}
            bgColor="gray"
            textColor="text"
            img={workoutPlayer}
          />
          <Project
            width={1}
            frame={1}
            bgColor="gray"
            textColor="text"
            img={profile}
          />
          <Project
            width={1}
            frame={["100%", "calc(50% - 8px)"]}
            bgColor="gray"
            textColor="text"
            img={trainerChat}
          />
          <Project
            width={1}
            frame={["100%", "calc(50% - 8px)"]}
            bgColor="gray"
            textColor="text"
            img={challenges}
          />
          <Project
            width={1}
            frame={["100%", "calc(50% - 8px)"]}
            bgColor="gray"
            textColor="text"
            img={pricelineDocs}
          />
          <Project
            width={1}
            frame={["100%", "calc(50% - 8px)"]}
            bgColor="gray"
            textColor="text"
            img={pricelineNav}
          />

        </Flex>
      </Container>
    </Box>

    <Resume />
  </Layout>
)

export default IndexPage
