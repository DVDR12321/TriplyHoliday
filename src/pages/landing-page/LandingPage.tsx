import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import styled from 'styled-components';

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.7); /* Add a slight dark overlay for better text visibility */
`;

const FullPageContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const StyledAppBar = styled(AppBar)`
  width: 100%; /* Ensure AppBar spans the full width */
  background-color: rgba(25, 118, 210, 0.9); /* Slightly darker semi-transparent menu bar */
  box-shadow: none;
`;

const ToolbarContent = styled(Toolbar)`
  display: flex;
  justify-content: space-between; /* Ensure proper alignment of content */
  align-items: center;
`;

const CenterButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; /* Center button takes up remaining space */
`;

const StyledButton = styled(Button)`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  background-color: #ff5722; /* Custom button color */
  color: white;
  &:hover {
    background-color: #e64a19; /* Darker shade on hover */
  }
`;

function LandingPage() {
  return (
    <FullPageContainer>
      <StyledAppBar position="fixed">
        <ToolbarContent>
          <Typography variant="h6">
            Triply Holiday
          </Typography>
          <Box>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Destinations</Button>
            <Button color="inherit">Contact</Button>
          </Box>
        </ToolbarContent>
      </StyledAppBar>

      <VideoBackground autoPlay loop muted>
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      <CenterButtonContainer>
        <StyledButton variant="contained" size="large">
          Explore Now
        </StyledButton>
      </CenterButtonContainer>
    </FullPageContainer>
  );
}

export default LandingPage;
