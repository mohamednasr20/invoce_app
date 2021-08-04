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
  },
});

const darkTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    type: 'dark',
    secondary: { main: '#141625' },
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
    secondary: { main: '#F8F8FB' },
    background: {
      default: '#F8F8FB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0C0E16',
      secondary: '#888EB0',
    },
  },
});

export { darkTheme, lightTheme };
