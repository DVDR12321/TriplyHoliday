import { Box, Button, styled } from '@mui/material';
import { useCallback } from 'react';
import video from '../../../assets/visit_greece.mp4';

const VideoWrapper = styled(Box)({
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative',
});

const BackgroundVideo = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const CenteredButton = styled(Button)(() => ({
  color: '#ffffff',
  borderColor: '#ffffff',
  textTransform: 'uppercase',
  padding: '16px 40px',
  fontSize: '1.125rem',
  fontWeight: 600,
  letterSpacing: '2px',
  backgroundColor: 'transparent',
  borderWidth: '2px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#ffffff',
  },
}));

export const CoverVideo = () => {
  const handleExploreClick = useCallback(() => {
    const section = document.getElementById('greece-map-section');
    if (section) {
      const yOffset = -50; // adjust this based on your header height
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);
  return (
    <VideoWrapper>
      <BackgroundVideo src={video} autoPlay loop muted playsInline />

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        <CenteredButton variant="outlined" onClick={handleExploreClick}>
          Istraži ponudu
        </CenteredButton>
      </Box>
    </VideoWrapper>
  );
};
