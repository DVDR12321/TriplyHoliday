import { Box, CardMedia, Typography } from '@mui/material';

const accommodations = [
  {
    title: 'Kefalonia',
    price: 120,
    imageUrl:
      'https://www.thethinkingtraveller.com/media/Resized/GREECE%20villas/Noera/1000/TTT_Cyclades_Islands_Mykonos_Noera_OCT23_253.jpg',
  },
  {
    title: 'Krf',
    price: 150,
    imageUrl:
      'https://www.thethinkingtraveller.com/media/Resized/GREECE%20villas/Carmen/SEP22/1000/TTT_Greece_Porto_Heli_Carmen_SEP22_010.jpg',
  },
  {
    title: 'Halkidiki',
    price: 130,
    imageUrl:
      'https://www.thethinkingtraveller.com/media/Resized/GREECE%20villas/Iriana/FEB22/1000/Greece_Porto_Heli_Iriana_NOV21_3.jpg',
  },
  {
    title: 'Santorini',
    price: 140,
    imageUrl:
      'https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt01d6d1d3f09fa0c3/6139e2f0422c0828c05248a3/UK_Greece_GR_Header.jpg?width=1920&quality=70&auto=webp',
  },
];

export const RecommendedDestinations = () => {
  return (
    <Box id='recommennded-destinations'>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 500,
          maxWidth: '1200px',
          px: 1,
          marginTop: '100px',
          mx: 'auto',
        }}
      >
        <Box
          component="span"
          sx={{
            backgroundColor: '#1976d2',
            color: 'white',
            paddingLeft: 1,
            paddingRight: 7,
            py: 0.5,
            borderRadius: 1,
            display: 'inline-block',
          }}
        >
          Preporučeni aranžmani
        </Box>
      </Typography>
      <Box
        component="section"
        sx={{
          py: 8,
          px: 1,
          maxWidth: '1200px',
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(200px, 1fr))',
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
                maxWidth: '100%',
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
    </Box>
  );
};
