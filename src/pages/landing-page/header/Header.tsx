import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'elevated' && prop !== 'transparent',
})<{ elevated: boolean; transparent: boolean }>(
  ({ elevated, transparent }) => ({
    backgroundColor: transparent && !elevated ? 'transparent' : '#ffffff',
    color: transparent && !elevated ? '#ffffff' : '#000000',
    boxShadow: elevated ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'all 0.3s ease-in-out',
  }),
);

export const Header = () => {
  const location = useLocation();
  const isOnHomePage = location.pathname === '/';

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { label: 'Destinacije', path: '/' },
    { label: 'Aranžmani', path: '/aranzmani' },
    { label: 'Kontakt', path: '/kontakt' }, // Added /kontakt
  ];

  return (
    <>
      <StyledAppBar
        position="fixed"
        elevated={trigger}
        transparent={isOnHomePage}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            LOGO
          </Typography>

          {isMobile ? (
            <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 4,
              }}
            >
              {navItems.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  style={{ all: 'unset', cursor: 'pointer' }}
                >
                  <Typography variant="h6" sx={{ color: 'inherit' }}>
                    {label}
                  </Typography>
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 260,
            paddingTop: 4,
            backgroundColor: '#fff', // clean white background
          },
        }}
      >
        <List sx={{ paddingX: 2 }}>
          {navItems.map(({ label, path }, index) => (
            <ListItem
              key={label}
              disablePadding
              onClick={handleDrawerToggle}
              component={Link}
              to={path}
              sx={{
                textDecoration: 'none',
                color: '#000',
                paddingY: 1.5,
                paddingX: 2,
                borderRadius: 1,
                transition: 'background 0.3s',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
