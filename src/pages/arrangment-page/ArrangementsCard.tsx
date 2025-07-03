import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Typography
} from '@mui/material';
import img from '../../assets/apartment_image.jpg';
import { useBookingContextProvider } from '../../context/BookingContext';

import type { Arrangement } from '../../types';

export const ArrangementsCard = (arrangementData: Arrangement) => {
  const { setName, setOpen } = useBookingContextProvider();

  const handleClick = () => {
    setOpen(true);
    setName(arrangementData.name);
  }

  return (
    <>
      <Card sx={{ display: 'flex', boxShadow: '10' }}>
        <CardMedia
          component="img"
          sx={{ width: '25vw', height: '35vh' }}
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
            {arrangementData.name}
          </Typography>
          <Typography component="div" variant="h5" paddingBottom="1ch">
            {arrangementData.city} | {arrangementData.country}
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
              padding="0 2ch 0 2ch "
            >
              {arrangementData.availableDates}
            </Typography>
            <Divider orientation="vertical" />
            <Box sx={{ paddingLeft: '2ch' }}>
              <DirectionsBusFilledOutlinedIcon />
            </Box>

            <Typography
              component="div"
              variant="body2"
              padding="0 2ch 0 2ch "
            >
              {arrangementData.transportation}
            </Typography>
            <Divider orientation="vertical" />
            <Box sx={{ paddingLeft: '2ch' }}>
              <KingBedOutlinedIcon />
            </Box>
            <Typography
              component="div"
              variant="body2"
              padding="0 2ch 0 2ch "
            >
              {arrangementData.numberOfNights} noćenja
            </Typography>
          </Box>
          <Divider sx={{ my: '1vh', borderStyle: 'dashed', borderColor: 'grey.500' }} />
          <Typography variant="body1" fontWeight='bold'>
            Dodatne informacije
          </Typography>
          <Typography component="div" variant="body2" >
            {arrangementData.tags.map((element, i) => (
              <span style={{ fontStyle: 'italic' }} key={i}>{element}{i !== arrangementData.tags.length - 1 ? ' — ' : ''}</span>
            ))}
          </Typography>
          <Divider sx={{ my: '1vh', borderStyle: 'dashed', borderColor: 'grey.500' }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: '1vh',
            }}
          >
            <Typography variant="h5" color="#0080FF" fontWeight='bold'>
              Od {arrangementData.pricePerDay} €
            </Typography>
            <Button variant="outlined" onClick={handleClick} >
              {' '}
              Pošalji upit{' '}
            </Button>
          </Box>

        </Box>
      </Card>
    </>
  );
};
