import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import img from '../../assets/apartment_image.jpg';

const ArrangementsCard = () => {
    return (
        <>
            <Card sx={{ display: 'flex' }}>
                <CardMedia component='img' sx={{ width: '15vw' }} image={img} alt='apartment image'>

                </CardMedia>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px'
                }}>
                    <Typography variant='h5'>
                        This is some text
                    </Typography>
                    <Typography component='div' >
                        This is a description of the location and the apartment. It has such and such utilities with such and such prices benefits etc etc
                    </Typography>
                    <Typography component='div' >
                        This is a description of the location and the apartment. It has such and such utilities with such and such prices benefits etc etc
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'center' }} >
                    <Button> Vidi detalje </Button>
                </Box>

            </Card>
        </>
    );

}

export default ArrangementsCard;