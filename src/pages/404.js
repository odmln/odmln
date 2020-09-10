import React from "react"
import { Link } from "gatsby"

// Required
import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Flex from "../components/Flex"
import Heading from "../components/Heading"
import Text from "../components/Text"

// Page Content
const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading as="h1" mb={3}>404</Heading>
      <Text>
        <Link to="/">
          Go back to odmln.com
        </Link>
      </Text>
    </Flex>
  </Layout>
)

export default NotFoundPage
