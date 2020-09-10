import styled from '@emotion/styled'

import {
  space,
  color,
  buttonStyle
} from 'styled-system'

const Button = styled.a`
  appearance: none;
  cursor: pointer;
  padding: 20px 40px;
  display: inline-block;
  text-align: center;
  font-size: ${props => props.theme.fontSizes[2]}px;
  font-family: ${props => props.theme.fonts.inter};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: 24px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.primary};
  border-width: 0;
  border-style: solid;
  border-radius: 6px;
  border-color: transparent;
  text-decoration: none;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  ${space}
  ${color}
  ${buttonStyle}
  &:hover {
    color: ${props => props.theme.colors.background};
    background-color: ${props => props.theme.colors.primary2};
    transform: translateX(8px);
  };
  &:focus {
    opacity: 1;
    box-shadow: 0 0 0 4px ${props => props.theme.colors.primary1};
    outline: 0;
  };
`

Button.defaultProps = {
  m: 0,
  variant: 'primary'
}

export default Button
