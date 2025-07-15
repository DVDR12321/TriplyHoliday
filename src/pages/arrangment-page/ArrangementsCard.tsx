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

import { useBookingContextProvider } from '../../context/BookingContext';

import type { Arrangement } from '../../types';

type ArrangementsCard = {
  arrangementData: Arrangement;
  image: string;
}

export const ArrangementsCard = ({ arrangementData, image }: ArrangementsCard) => {
  const { setName, setOpen } = useBookingContextProvider();

  const handleClick = () => {
    setOpen(true);
    setName(arrangementData.name);
  };

  return (
    <>
      <Card sx={{ display: 'flex', boxShadow: '10', padding: '2vh' }}>
        <CardMedia
          component="img"
          sx={{ width: '25vw', height: '35vh' }}
          image={image}
          alt="apartment image"
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '2vh 3vw 2vh 5vw',
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            {arrangementData.name}
          </Typography>
          <Typography component="div" variant="h6" paddingBottom="1ch">
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
            <Typography component="div" variant="body2" padding="0 2ch 0 2ch ">
              {arrangementData.availableDates}
            </Typography>
            <Divider orientation="vertical" />
            <Box sx={{ paddingLeft: '2ch' }}>
              <DirectionsBusFilledOutlinedIcon />
            </Box>

            <Typography component="div" variant="body2" padding="0 2ch 0 2ch ">
              {arrangementData.transportation}
            </Typography>
            <Divider orientation="vertical" />
            <Box sx={{ paddingLeft: '2ch' }}>
              <KingBedOutlinedIcon />
            </Box>
            <Typography component="div" variant="body2" padding="0 2ch 0 2ch ">
              {arrangementData.numberOfNights} noćenja
            </Typography>
          </Box>
          <Divider
            sx={{ my: '1vh', borderStyle: 'dashed', borderColor: 'grey.500' }}
          />
          <Typography variant="body2" fontWeight="bold">
            Dodatne informacije
          </Typography>
          <Typography component="div" variant="body2">
            {arrangementData.tags.map((element, i) => (
              <span style={{ fontStyle: 'italic' }} key={i}>
                {element}
                {i !== arrangementData.tags.length - 1 ? ' — ' : ''}
              </span>
            ))}
          </Typography>
          <Divider
            sx={{ my: '1vh', borderStyle: 'dashed', borderColor: 'grey.500' }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: '1vh',
            }}
          >
            <Typography variant="h6" color="#0080FF" fontWeight="bold">
              Od {arrangementData.pricePerDay} €
            </Typography>
            <Button variant="outlined" onClick={handleClick}>
              Pošalji upit
            </Button>
          </Box>
        </Box>
      </Card>
    </>
        </Box >
      </Card >
    </>
  );
};
