import createMuiTheme from '@mui/material/styles/createTheme';

// MUI color tool https://material.io/resources/color/#!/?view.left=0&view.right=0

const theme = createMuiTheme({
  palette: {
    // Red
    primary: {
      light: '#f05545',
      main: '#b71c1c',
      dark: '#7f0000',
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
