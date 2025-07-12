import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ViberIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

export const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Hvala što ste se prijavili!');
  };

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        color: '#e1e4e8',
        pt: 6,
        pb: 4,
        overflow: 'hidden',
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url("https://pixnio.com/free-images/2019/01/23/2019-01-23-09-08-52.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          <Box sx={{ flex: '1 1 300px', minWidth: 280 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{ fontFamily: '"Montserrat", sans-serif' }} // New font
            >
              Triply Holiday
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                lineHeight: 1.6,
                fontFamily: '"Montserrat", sans-serif',
              }} // New font
            >
              Vaša pouzdana turistička agencija. Pružamo nezaboravne destinacije
              i vrhunsku uslugu prilagođenu vašim željama.
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1, fontFamily: '"Montserrat", sans-serif' }} // New font
            >
              Telefon:{' '}
              <Link
                href="tel:+38111222333"
                color="inherit"
                underline="hover"
                sx={{ fontWeight: 'medium' }}
              >
                +381 11 222 333
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, fontFamily: '"Montserrat", sans-serif' }} // New font
            >
              Email:{' '}
              <Link
                href="mailto:info@triplyholiday.rs"
                color="inherit"
                underline="hover"
                sx={{ fontWeight: 'medium' }}
              >
                info@triplyholiday.rs
              </Link>
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                href="https://www.facebook.com/triplyholiday"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                sx={{
                  color: '#4267B2',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { bgcolor: '#4267B2', color: '#fff' },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/triplyholiday"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                sx={{
                  color: '#C13584',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { bgcolor: '#C13584', color: '#fff' },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://wa.me/38111222333"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
                sx={{
                  color: '#25D366',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { bgcolor: '#25D366', color: '#fff' },
                }}
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                href="viber://chat?number=%2B38111222333"
                target="_blank"
                rel="noopener"
                aria-label="Viber"
                sx={{
                  color: '#665CAC',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { bgcolor: '#665CAC', color: '#fff' },
                }}
              >
                <ViberIcon />
              </IconButton>
            </Stack>
          </Box>
          <Box sx={{ flex: '1 1 150px', minWidth: 150 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Linkovi
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">
                O nama
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Destinacije
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Uslovi korišćenja
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Kontakt
              </Link>
            </Stack>
          </Box>

          <Box sx={{ flex: '1 1 300px', minWidth: 280 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ fontFamily: '"Montserrat", sans-serif' }} // New font
            >
              Pretplatite se na novosti
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, fontFamily: '"Montserrat", sans-serif' }} // New font
            >
              Ostanite u toku sa najnovijim ponudama i akcijama.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubscribe}
              sx={{ display: 'flex', gap: 1 }}
            >
              <TextField
                variant="filled"
                placeholder="Vaš email"
                type="email"
                required
                fullWidth
              />
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{
                  bgcolor: '#ff5722',
                  '&:hover': { bgcolor: '#e64a19' },
                }}
              >
                Pošalji
              </Button>
            </Box>
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            mt: 6,
            textAlign: 'center',
            opacity: 0.5,
            fontFamily: '"Montserrat", sans-serif',
          }}
        >
          © {new Date().getFullYear()} Triply Holiday. Sva prava zadržana.
        </Typography>
      </Container>
    </Box>
  );
};
