import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// MUI color tool https://material.io/resources/color/#!/?view.left=0&view.right=0

const theme = createMuiTheme({
  palette: {
    // Red
    primary: {
      light: '#ff6659',
      main: '#d32f2f',
      dark: '#9a0007',
    },
    // Dark grey
    secondary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
    },
    // Light grey
    background: {
      light: '#ffffff',
      main: '#e0e0e0',
      dark: '#aeaeae',
    },
  },
});

export default theme;
