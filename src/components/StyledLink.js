import styled from '@emotion/styled'

import {
  color,
  space,
  fontWeight
} from 'styled-system'

const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.text};
  opacity: 0.64;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-position: 0 100%;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  ${color} ${space} ${fontWeight} &:hover {
    color: ${props => props.theme.colors.text};
    opacity: 1;
    background-size: 100% 100%;
  }
`

StyledLink.defaultProps = {
  fontWeight: 'regular'
}

export default StyledLink
