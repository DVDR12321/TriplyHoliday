import { Box, CardMedia, Typography } from '@mui/material';
import { accommodations } from './accomodations';

export const RecommendedDestinations = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        px: 1,
        maxWidth: '1400px',
        mx: 'auto',
        display: 'grid',
        padding: {
          xs: '100px',
        },
        gridTemplateColumns: {
          xs: '1fr', // mobile: 1 per row
          sm: 'repeat(2, 1fr)', // tablet: 2 per row
          md: 'repeat(4, 1fr)', // desktop: 4 per row
        },
        gap: 3,
      }}
    >
      {accommodations.map(({ title, price, imageUrl }) => (
        <Box
          key={title}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '20px',
            cursor: 'pointer',
            overflow: 'hidden',
            borderRadius: '10px',
            boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            '&:hover': {
              boxShadow: '0 16px 32px rgba(0,0,0,0.3)',
              transform: 'translateY(-8px)',
            },
            '&:hover img': {
              transform: 'scale(1.15)',
            },
          }}
        >
          <CardMedia
            component="img"
            src={imageUrl}
            alt={title}
            sx={{
              height: 300,
              width: '100%',
              objectFit: 'cover',
              borderRadius: '10px 10px 0 0',
              transition: 'transform 0.3s ease',
              mb: '-40px',
              position: 'relative',
              zIndex: 2,
            }}
          />

          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: '0 0 24px 24px',
              boxShadow: 3,
              px: 2,
              pt: 6,
              pb: 4,
              width: '100%',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Typography variant="h6" component="h3" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              od {price} evra
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
