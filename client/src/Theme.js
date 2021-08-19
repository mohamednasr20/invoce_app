import { createMuiTheme } from '@material-ui/core/styles';

const baseTheme = createMuiTheme({
  typography: {
    fontFamily: "'Spartan', sans-serif",
    fontSize: 14,
  },
  palette: {
    primary: {
      main: '#7C5DFA',
    },
    secondary: {
      main: '#EC5757',
    },
  },
});

const darkTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    type: 'dark',
    info: { main: '#141625' },
    background: {
      default: '#141625',
      paper: '#252945',
    },
    text: {
      primary: '#ffffff',
      secondary: '#DFE3FA',
    },
  },
});

const lightTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    type: 'light',
    info: { main: '#F8F8FB' },
    background: {
      default: '#F8F8FB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0C0E16',
      info: '#888EB0',
    },
  },
});

export { darkTheme, lightTheme };
