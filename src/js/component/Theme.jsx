import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#ff5a5f', // Airbnb Red
    },
    secondary: {
      main: '#00a699', // Airbnb Green
    },
  },
  typography: {
    fontFamily: 'Airbnb Cereal, Arial, sans-serif',
  },
});

export default Theme;