import React, { useState, useEffect } from "react"

import PropTypes from "prop-types"
import { Global } from '@emotion/core'
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'emotion-theming'
import { Sun } from 'react-feather'

import merge from 'lodash.merge'
import get from 'lodash.get'

import Box from "./Box"
import Container from "./Container"
import Flex from "./Flex"
import Heading from "./Heading"
import Logo from "./Logo"
import Nav from "./Nav"
import StyledLink from "./StyledLink"
import Text from "./Text"

import css from '@styled-system/css'
import baseTheme from './theme'
import "./layout.css"

const style = (
  <Global
    styles={theme => css({
      '*': { boxSizing: 'border-box' },
      body: {
        margin: 0,
        fontFamily: 'sans',
        lineHeight: 'body',
        color: 'text',
        bg: 'background'
      }
    })(theme)}
  />
)

const modes = [
  'light',
  'dark'
]

const getTheme = mode => merge({}, baseTheme, {
  colors: get(baseTheme.colors.modes, mode, baseTheme.colors)
})

const Layout = ({ children }) => {
  const [ mode, setMode ] = useState(modes[0])

  const theme = getTheme(mode)

  useEffect(() => {
    const initialMode = window.localStorage.getItem('mode') || modes[0]
    if (initialMode && initialMode !== mode) {
      setMode(initialMode)
    }
  }, [])
  useEffect(() => {
    window.localStorage.setItem('mode', mode)
  }, [ mode ])

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <ThemeProvider theme={theme}>
            {style}
            <Box py={6}>
              <Heading
                as="h1"
                style={{
                  opacity: "0",
                  position: "absolute"
                }}
              > odmln | Oliver Dumoulin </Heading>

              <Container
                px={[5, 6]}
                maxWidth="1600px"
              >
                <Flex
                  width={1}
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <a href="/">
                    <Logo />
                  </a>
                  <Flex>
                    <Nav />
                    <StyledLink
                      href="#/"
                      title="Change color mode"
                      rel="noopener noreferrer"
                    >
                      <Flex
                        ml={[2, 3]}
                        height="32px"
                        width="32px"
                        alignItems="center"
                        justifyContent="center"
                        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                      >
                        <Sun />
                      </Flex>
                    </StyledLink>
                  </Flex>
                </Flex>
              </Container>
            </Box>

            {children}

            <Box py={6}>
              <Container
                px={[5, 6]}
                maxWidth="1600px"
              >
                <Flex
                  justifyContent="space-between"
                >
                  <Text
                    fontSize={2}
                  >
                    © 2020 odmln
                  </Text>
                  <Text
                    fontSize={2}
                  >
                    <StyledLink href="mailto:hi@odmln.com" title="hi@odmln.com" target="_blank" rel="noopener noreferrer">hi@odmln.com</StyledLink>
                  </Text>
                </Flex>
              </Container>
            </Box>
          </ThemeProvider>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
