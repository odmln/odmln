import React from 'react'

import {
  FaTwitter,
  FaGithub
} from 'react-icons/fa'

import Flex from "./Flex"
import StyledLink from "./StyledLink"

const Nav = props =>

<Flex>

  <StyledLink
    href="https://twitter.com/odmln"
    target="_blank"
    title="Twitter"
    rel="noopener noreferrer"
  >
    <Flex
      ml={[2, 3]}
      height="32px"
      width="32px"
      alignItems="center"
      justifyContent="center"
    >
      <FaTwitter
        style={{
          width: "24px",
          height: "24px"
        }}
      />
    </Flex>
  </StyledLink>

  <StyledLink
    href="https://github.com/odmln"
    target="_blank"
    title="Github"
    rel="noopener noreferrer"
  >
    <Flex
      ml={[2, 3]}
      height="32px"
      width="32px"
      alignItems="center"
      justifyContent="center"
    >
      <FaGithub
        style={{
          width: "24px",
          height: "24px"
        }}
      />
    </Flex>
  </StyledLink>

</Flex>

export default Nav
