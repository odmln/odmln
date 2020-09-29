import styled from '@emotion/styled'

import {
  color,
  space,
  fontWeight
} from 'styled-system'

const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  opacity: 0.64;
  background-repeat: no-repeat;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  ${color} ${space} ${fontWeight} &:hover {
    opacity: 1;
  }
`

StyledLink.defaultProps = {
  color: 'text',
  fontWeight: 'regular'
}

export default StyledLink
