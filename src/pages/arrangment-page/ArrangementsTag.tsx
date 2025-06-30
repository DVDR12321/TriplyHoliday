import { Box, Button, Collapse, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";

const ArrangementsTag = () => {
    const { open, setOpen } = useContext(BookingContext);

    return (
        <Box
            sx={{
                position: "fixed",
                top: "40%",
                right: 0,
                zIndex: 1300, // above most content
            }}
        >
            <Box
                sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    px: 2,
                    py: 1,
                    borderBottomLeftRadius: 0,
                    cursor: "pointer",
                }}
                onClick={() => setOpen(!open)}
            >
                Bukiraj
            </Box>

            <Collapse in={open} orientation="horizontal">
                <Box
                    sx={{
                        width: 350,
                        height: 325,
                        backgroundColor: "background.paper",
                        boxShadow: 3,
                        p: 2,
                        borderBottomLeftRadius: 5,
                    }}
                >
                    {/* Your form goes here */}
                    <TextField variant='outlined' required label='Ime Apartmana' fullWidth sx={{ marginBottom: '3vh' }} />
                    <TextField variant='outlined' required label='Broj Osoba' fullWidth sx={{ marginBottom: '3vh' }} />
                    <Stack direction='row'>
                        <TextField variant='outlined' required label='Datum od' sx={{ marginBottom: '3vh', marginRight: '1vw' }} />
                        <TextField variant='outlined' required label='Datum do' sx={{ marginBottom: '3vh', marginLeft: '1vw' }} />
                    </Stack>
                    <Button fullWidth variant="contained" onClick={() => alert("Submitted!")}>
                        Pošalji upit
                    </Button>
                </Box>
            </Collapse>
        </Box>);
}

export default ArrangementsTag;

