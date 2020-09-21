import styled from '@emotion/styled'

import {
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing
} from 'styled-system'

import Box from './Box'

const Text = styled(Box)`
  display: inline-block;
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing};
  display: block;
`

Text.defaultProps = {
  color: 'text',
  fontSize: [1, 2],
  fontFamily: 'inter',
  fontWeight: 'regular',
  lineHeight: 'body'
}

export default Text
