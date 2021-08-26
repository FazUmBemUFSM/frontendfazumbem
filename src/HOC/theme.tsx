import React, { ReactNode } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#284870",
    },
    secondary: {
      main: "#ED254E",
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    subtitle2: {
      fontSize: "2em",
      fontWeight: "lighter",
    },
  },
});

interface ThemingProps {
  children?: ReactNode;
}

const Theming: React.FC = ({ children }: ThemingProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theming;
