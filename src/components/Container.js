import styled from '@emotion/styled'

import Box from './Box'

const Container = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

Container.defaultProps = {
  px: [5, 6],
  maxWidth: '1024px'
}

export default Container
