import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	useMediaQuery,
	useScrollTrigger,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";

const StyledAppBar = styled(AppBar, {
	shouldForwardProp: prop => prop !== 'elevated' && prop !== 'transparent',
})<{ elevated: boolean; transparent: boolean }>(({ elevated, transparent }) => ({
	backgroundColor: transparent && !elevated ? 'transparent' : '#ffffff',
	color: transparent && !elevated ? '#ffffff' : '#000000',
	boxShadow: elevated ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
	transition: 'all 0.3s ease-in-out',
}));

export const Header = () => {
	const location = useLocation();
	const isOnHomePage = location.pathname === '/';

	const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<StyledAppBar position="fixed" elevated={trigger} transparent={isOnHomePage}>
			<Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
				{/* Logo */}
				<Typography variant="h6" sx={{ fontWeight: 700 }}>
					LOGO
				</Typography>

				{!isMobile && (
					<Box
						sx={{
							position: 'absolute',
							left: '50%',
							transform: 'translateX(-50%)',
							display: 'flex',
							gap: 4,
						}}>
						<Link to='/' style={{ textDecoration: 'none', textTransform: 'none', all: "unset", }}>
							<Typography variant="h6" component="a" sx={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
								Destinacije
							</Typography>
						</Link>

						<Link to="/aranzmani" style={{ textDecoration: 'none', textTransform: 'none', all: "unset", }}>
							<Typography variant="h6" component="a" sx={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
								Aranžmani
							</Typography>
						</Link>
						<Typography variant="h6" component="a" sx={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
							Kontakt
						</Typography>
					</Box>
				)}
			</Toolbar>
		</StyledAppBar>
	);
};
