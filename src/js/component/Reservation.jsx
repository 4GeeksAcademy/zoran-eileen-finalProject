import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Guests from './Guests.jsx';
import { useNavigate, useParams } from "react-router-dom";

export default function Reservation() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  return (
    <Card variant="outlined" sx={{ maxWidth: 400 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h6" component="div">
            <strong>$75</strong> / night
          </Typography>
        </Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={2}>
            <DatePicker label="CHECK-IN" defaultValue={dayjs('2025-04-17')} />
            <DatePicker
              label="CHECKOUT"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </Stack>
        </LocalizationProvider>
        <Guests />
      </Box>
      <Box sx={{ p: 2 }}>
        <Button onClick={() => navigate(`/reservationconfirmation/${id}`)} color="secondary" variant="contained" size="large" fullWidth>
          Reserve
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          You won't be charged yet.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" align="center">
          Total before taxes $191
        </Typography>
      </Box>
    </Card>
  );
}
