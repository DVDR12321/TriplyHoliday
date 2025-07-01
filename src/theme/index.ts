import { createTheme } from '@mui/material/styles';
import COLORS from '../constants/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    background: {
      default: COLORS.background,
    },
    text: {
      primary: COLORS.textPrimary,
      secondary: COLORS.textSecondary,
    },
  },
  typography: {
    fontFamily: '"Poppins", Arial, sans-serif', // Define Poppins font globally
    h1: {
      fontSize: '3.2rem',
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 500,
      textTransform: 'none',
    },
    link: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          fontFamily: '"Poppins", Arial, sans-serif',
          backgroundColor: COLORS.background,
          color: COLORS.textPrimary,
        },
        a: {
          fontWeight: 500,
          color: COLORS.primary,
          textDecoration: 'inherit',
          '&:hover': {
            color: COLORS.secondary,
          },
        },
        button: {
          borderRadius: '8px',
          border: '1px solid transparent',
          padding: '0.6em 1.2em',
          fontSize: '1em',
          fontWeight: 500,
          fontFamily: 'inherit',
          backgroundColor: COLORS.textPrimary,
          cursor: 'pointer',
          transition: 'border-color 0.25s',
          '&:hover': {
            borderColor: COLORS.primary,
          },
          '&:focus, &:focus-visible': {
            outline: '4px auto -webkit-focus-ring-color',
          },
        },
      },
    },
  },
});

export default theme;
