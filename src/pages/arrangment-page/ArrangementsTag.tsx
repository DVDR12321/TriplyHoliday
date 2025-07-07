import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import type { SelectChangeEvent } from '@mui/material';

import {
  Box,
  Button,
  Collapse,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import type { Dayjs } from 'dayjs';
import { useState } from 'react';
import { COUNTRIES } from '../../constants/countries';
import { useBookingContextProvider } from '../../context/BookingContext';

export const ArrangementsTag = () => {
  const { name, setName, open, setOpen } = useBookingContextProvider();
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [dateFrom, setDateFrom] = useState<Dayjs | null>(null);
  const [dateTo, setDateTo] = useState<Dayjs | null>(null);
  const [country, setCountry] = useState('serbia');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  const handleToggleOpen = () => {
    setOpen((prev) => !prev);
    setStep(1);
    setName('');
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    alert('Uspešno poslato!');
  };

  return (
    <Collapse in={open} orientation="horizontal" timeout={300}>
      <Box
        sx={{
          position: 'fixed',
          top: '15vh',
          right: 0,
          width: '25vw',
          maxHeight: '75vh',
          bgcolor: 'background.paper',
          boxShadow: 3,
          borderBottomLeftRadius: 5,
          overflowY: 'auto',
          zIndex: 1500,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            px: 2,
            py: 1,
            borderTopLeftRadius: 5,
            cursor: 'pointer',
            userSelect: 'none',
            flexShrink: 0,
          }}
          onClick={handleToggleOpen}
        >
          Bukiraj
        </Box>

        <Box sx={{ p: 2, overflowY: 'auto' }}>
          {step === 1 && (
            <>
              <TextField
                variant="outlined"
                required
                label="Ime Apartmana"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                variant="outlined"
                required
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="flag-select-label">Država</InputLabel>
                  <Select
                    labelId="flag-select-label"
                    value={country}
                    label="Država"
                    onChange={handleChangeCountry}
                  >
                    {COUNTRIES.map((c) => (
                      <MenuItem key={c.value} value={c.value}>
                        {c.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  variant="outlined"
                  label="Broj telefona"
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Stack>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" onClick={nextStep}>
                  Dalje
                </Button>
              </Box>
            </>
          )}

          {step === 2 && (
            <>
              <TextField
                variant="outlined"
                required
                label="Broj Osoba"
                fullWidth
                value={peopleCount}
                onChange={(e) => setPeopleCount(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <DatePicker
                  label="Datum od"
                  value={dateFrom}
                  onChange={(newValue) => setDateFrom(newValue)}
                />
                <DatePicker
                  label="Datum do"
                  value={dateTo}
                  onChange={(newValue) => setDateTo(newValue)}
                />
              </Stack>
              <TextField
                variant="outlined"
                label="Poruka"
                multiline
                rows={3}
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={prevStep}>
                  Nazad
                </Button>
                <Button
                  variant="contained"
                  endIcon={<SendOutlinedIcon />}
                  onClick={handleSubmit}
                >
                  Pošalji upit
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Collapse>
  );
};
