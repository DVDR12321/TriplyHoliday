import type { SelectChangeEvent } from '@mui/material';
import {
  Box,
  Button,
  Collapse,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { COUNTRIES } from '../../constants/countries';
import { useBookingContextProvider } from '../../context/BookingContext';

import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useState } from 'react';

const ArrangementsTag = () => {
  const { name, setName, open, setOpen } = useBookingContextProvider();
  const [country, setCountry] = useState('serbia');

  const handleClick = () => {
    setOpen((open) => !open);
    setName('');
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  const FlagMenu = () => (
    <FormControl fullWidth>
      <InputLabel id="flag-select-label">Država</InputLabel>
      <Select
        labelId="flag-select-label"
        value={country}
        defaultValue="serbia"
        label="Država"
        onChange={handleChange}
      >
        {COUNTRIES.map((country) => (
          <MenuItem key={country.value} value={country.value}>
            {country.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  return (
    <Box
      sx={{
        position: 'absolute',
        right: 0,
        zIndex: 1300,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          px: 2,
          py: 1,
          borderBottomLeftRadius: 0,
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        Bukiraj
      </Box>

      <Collapse in={open} orientation="horizontal">
        <Box
          sx={{
            width: '20vw',
            height: '70vh',
            backgroundColor: 'background.paper',
            boxShadow: 3,
            p: 2,
            borderBottomLeftRadius: 5,
          }}
        >
          <TextField
            variant="outlined"
            required
            label="Ime Apartmana"
            fullWidth
            value={name}
            sx={{ marginBottom: '2vh' }}
          />
          <TextField
            variant="outlined"
            required
            label="Broj Osoba"
            fullWidth
            sx={{ marginBottom: '2vh' }}
          />
          <Stack direction="row">
            <TextField
              variant="outlined"
              required
              label="Datum od"
              sx={{ marginBottom: '1vh', marginRight: '1ch' }}
            />
            <TextField
              variant="outlined"
              required
              label="Datum do"
              sx={{ marginBottom: '1vh', marginLeft: '1ch' }}
            />
          </Stack>
          <Divider orientation="horizontal" sx={{ my: '2vh' }}></Divider>
          <TextField
            variant="outlined"
            required
            label="Ime"
            fullWidth
            sx={{ marginBottom: '2vh' }}
          />
          <TextField
            variant="outlined"
            required
            label="Email"
            fullWidth
            sx={{ marginBottom: '2vh' }}
          />
          <Stack direction="row">
            <FlagMenu />
            <TextField
              variant="outlined"
              required
              label="Broj telefona"
              fullWidth
              sx={{ marginBottom: '2vh', marginLeft: '1ch' }}
            />
          </Stack>

          <TextField
            variant="outlined"
            label="Poruka"
            fullWidth
            multiline
            rows={2}
            sx={{ marginBottom: '2vh' }}
          />
          <Button
            fullWidth
            variant="contained"
            endIcon={<SendOutlinedIcon />}
            onClick={() => alert('Uspešno poslato!')}
          >
            Pošalji upit
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ArrangementsTag;
