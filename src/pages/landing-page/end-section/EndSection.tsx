import { Box, Typography } from "@mui/material";
import coverImage from '../../../assets/end_section_image.jpg';

const EndSection = () => {
    return (

        <Box
            sx={{
                position: 'relative',
                backgroundAttachment: 'fixed',
                width: '100%',
                height: '50vh',
                backgroundImage: `url(${coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                overflow: 'hidden',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',

            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '50vh',
                    overflow: 'hidden',
                    clipPath: 'inset(0 0 0 0)',
                    pointerEvents: 'none',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        position: 'fixed',
                        width: '100%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        textShadow: '0 0 10px rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(20px)',
                        opacity: '40%',
                        background: 'linear-gradient(90deg, hsla(200, 100%, 45%, 1) 9%, hsla(25, 100%, 39%, 1) 50%, hsla(25, 100%, 39%, 1) 100%)',
                        fontWeight: '500',
                        pointerEvents: 'none',
                    }}
                >
                    Uhvati prvi talas avanture
                </Typography>
            </Box>
        </Box>
    );
}

export default EndSection;