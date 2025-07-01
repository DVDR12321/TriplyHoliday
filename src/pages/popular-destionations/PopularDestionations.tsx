import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { destinations } from './destionations';

const GridContainer = styled(Box)`
  display: grid;
  gap: 15px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 250px) 180px;
  grid-template-areas:
    'large topRight'
    'large bottomRight'
    'fullwidth fullwidth';
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

const LargeImage = styled(Box)`
  grid-area: large;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`;

const TopRightImage = styled(Box)`
  grid-area: topRight;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`;

const BottomRightImage = styled(Box)`
  grid-area: bottomRight;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`;

const FullWidthImage = styled(Box)`
  grid-area: fullwidth;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 180px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
  }
`;

const Overlay = styled(Box)`
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: white;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
`;

const Title = styled(Typography)`
  font-weight: 600 !important;
  font-size: 1.4rem !important;
`;

const Country = styled(Typography)`
  font-size: 0.9rem !important;
  opacity: 0.85;
`;

export const PopularDestinationsSection = () => {
  return (
    <Box sx={{ padding: '40px 20px' }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          marginBottom: '30px',
          maxWidth: 1100,
          mx: 'auto',
        }}
      >
        Najtraženije destinacije
      </Typography>

      <GridContainer>
        <LargeImage>
          <Img src={destinations[0].imageUrl} alt={destinations[0].title} />
          <Overlay>
            <Title>{destinations[0].title}</Title>
            <Country>{destinations[0].country}</Country>
          </Overlay>
        </LargeImage>

        <TopRightImage>
          <Img src={destinations[1].imageUrl} alt={destinations[1].title} />
          <Overlay>
            <Title>{destinations[1].title}</Title>
            <Country>{destinations[1].country}</Country>
          </Overlay>
        </TopRightImage>

        <BottomRightImage>
          <Img src={destinations[2].imageUrl} alt={destinations[2].title} />
          <Overlay>
            <Title>{destinations[2].title}</Title>
            <Country>{destinations[2].country}</Country>
          </Overlay>
        </BottomRightImage>

        <FullWidthImage>
          <Img src={destinations[3].imageUrl} alt={destinations[3].title} />
          <Overlay>
            <Title>{destinations[3].title}</Title>
            <Country>{destinations[3].country}</Country>
          </Overlay>
        </FullWidthImage>
      </GridContainer>
    </Box>
  );
};
