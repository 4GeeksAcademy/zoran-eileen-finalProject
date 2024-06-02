import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Guests from './Guests.jsx'

import { useNavigate } from "react-router-dom";

export default function Reservation() {
  
  const navigate = useNavigate();
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  return (
  <div className='Reservation_card'>
    <Card variant="outlined" sx={{ maxWidth: 500 }}>
      <Box className='reserve_box1' sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h6" component="div">
            <strong>$75</strong> night
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
            <LocalizationProvider className='reservation_dates' dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker', 'DatePicker']}>
            <DatePicker label="CHECK-IN" defaultValue={dayjs('2025-04-17')} />
            <DatePicker
              label="CHECKOUT"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        </Typography> 
        <Typography color="text.secondary" variant="body2">
            <Guests />
        </Typography>
      </Box>
      <Box className='reserve_button' sx={{ p: 1 }}>
        <Button onClick={() => navigate("/reservationconfirmation")} color="secondary" variant="contained" size="large">Reserve</Button>
        <Typography gutterBottom variant="body2">
          You won't be charged yet.
        </Typography>
        <Divider />
        <Typography className='reservation_price' gutterBottom variant="h6">
          <strong> Total before taxes $191</strong>
        </Typography>
      </Box>
    </Card>
  </div>
  );
}

