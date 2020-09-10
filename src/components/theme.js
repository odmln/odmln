// theme.js

const colors = {
  text: '#00030A',
  background: '#fff',
  primary: '#1e3932',
  gray: '#f4f5f6',
  subtle: '#26292C',

  modes: {
    dark: {
      text: '#fff',
      background: '#00030A',
      primary: '#0055ff',
      gray: '#191A1B',
      subtle: '#CCCFD5',
    }
  }
}

export default {
  colors,
  space: [
    0, 4, 8, 16, 24, 32, 48, 64, 96, 128
  ],
  widths: [
    0, 8, 16, 24, 32, 48, 64, 128, 256, 512
  ],
  heights: [
    0, 8, 16, 24, 32, 48, 64, 128, 256, 512
  ],
  fonts: {
    colfax: '"Colfax", sans-serif',
    inter: '"Inter", sans-serif',
    sans: '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
    mono: '"SFMono", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  fontSizes: [
    12, 16, 20, 24, 32, 40, 48, 64, 72
  ],
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  letterSpacings: {
    tight: '-1px',
    loose: '1px',
  },
  styles: {
    a: {
      color: 'text',
    },
    p: {
      fontSize: 1,
    },
    h1: {
      fontSize: [5, 6],
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      }
    },
    h2: {
      fontSize: [4, 5],
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      }
    },
    h3: {
      fontSize: [3, 4],
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      }
    },
    h4: {
      fontSize: [2, 3],
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      }
    },
    h5: {
      fontSize: [1, 2],
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      }
    },
    h6: {
      fontSize: [0, 1],
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      }
    }
  }
}
