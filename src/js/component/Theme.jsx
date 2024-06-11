import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#FD6A02', // Airbnb Red
    },
    secondary: {
      main: '#FD9000', // Airbnb Green
    },
    background: {
      default: '#011F22',
    },
  },
  typography: {
    fontFamily: 'Airbnb Cereal, Arial, sans-serif',
  },
});

export default Theme;