import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import img from '../../assets/apartment_image.jpg';
import { useBookingContextProvider } from '../../context/BookingContext';

import type { Arrangement } from '../../types';

export const ArrangementsCard = (arrangement: Arrangement) => {
  const { setOpen } = useBookingContextProvider();
  return (
    <>
      <Card sx={{ display: 'flex', boxShadow: '10' }}>
        <CardMedia
          component="img"
          sx={{ width: '18vw', height: '28vh' }}
          image={img}
          alt="apartment image"
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1vh 2vw 1vh 4vw',
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Apartman
          </Typography>
          <Typography component="div" variant="h5" paddingBottom="1ch">
            {arrangement.city} | {arrangement.country}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              padding: '2vh 0 2vh 0',
            }}
          >
            <CalendarMonthOutlinedIcon />
            <Typography
              component="div"
              variant="body2"
              fontWeight="bold"
              padding="0 2ch 0 2ch "
            >
              {arrangement.availableDates}
            </Typography>
            <Divider orientation="vertical" />
            <Box sx={{ paddingLeft: '2ch' }}>
              <DirectionsBusFilledOutlinedIcon />
            </Box>

            <Typography
              component="div"
              variant="body2"
              fontWeight="bold"
              padding="0 2ch 0 2ch "
            >
              {arrangement.transportation}
            </Typography>
            <Divider orientation="vertical" />
            <Box sx={{ paddingLeft: '2ch' }}>
              <KingBedOutlinedIcon />
            </Box>
            <Typography
              component="div"
              variant="body2"
              fontWeight="bold"
              padding="0 2ch 0 2ch "
            >
              {arrangement.numberOfNights} noćenja
            </Typography>
          </Box>
          <Typography component="div" variant="body2">
            {arrangement.tags.map((element) => `${element}  — `)}
          </Typography>

          <Divider sx={{ paddingTop: '1vh' }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: '1vh 0 0 0',
            }}
          >
            <Typography variant="h5" color="#0080FF">
              Od {arrangement.pricePerDay} €
            </Typography>
            <Button variant="outlined" onClick={() => setOpen(true)}>
              {' '}
              Bukiraj{' '}
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};
