import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme ({
    palette: {
        primary: {
          main: '#009099',
        },
        secondary: {
          main: '#990900',
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
