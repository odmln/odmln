import styled from '@emotion/styled'

import Text from './Text'

const Heading = styled(Text)`
  display: block;
`

Heading.defaultProps = {
  color: 'text',
  fontFamily: 'inter',
  fontWeight: 'bold',
  lineHeight: 'heading'
}

export default Heading
