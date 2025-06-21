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
    fontFamily: `'Nocturne', serif`,
    h1: {
      fontSize: '2.25rem',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 600,
      letterSpacing: 1,
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '0.9375rem',
      lineHeight: 1.5,
      // textTransform: 'uppercase',
    },
    button: {
      fontSize: '0.8125rem',
      textTransform: 'uppercase',
      fontWeight: 500,
    },
  },
});

export default theme;
