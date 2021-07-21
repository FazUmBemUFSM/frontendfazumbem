import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme ({
    palette: {
        primary: {
          main: '#284870',
        },
        secondary: {
          main: '#ED254E',
        },
      },
    typography: {
      fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      subtitle2: {
        fontSize: "2em",
        fontWeight: "lighter"
      },
    },
    
});


const Theming : React.FC = (props) =>{
  return (
    <ThemeProvider theme={theme}>
        {props.children}
    </ThemeProvider>
  );
}

export default Theming;
