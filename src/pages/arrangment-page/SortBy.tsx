import { Button, Menu, MenuItem, Stack, Typography } from '@mui/material';
import type { MouseEvent } from 'react';
import { useState } from 'react';
import { useBookingContextProvider } from '../../context/BookingContext';


const SortBy = () => {
    const { setSortPhrase } = useBookingContextProvider();

    const options = ['rastuća cena', 'opadajuća cena'];
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(e.currentTarget);

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        setSortPhrase(options[index]);
    };

    return (
        <Stack direction='row' alignItems='center'>
            <Typography variant='body2'> Sortiraj po: </Typography>
            <Button variant="outlined" onClick={handleClick} disableRipple sx={{ px: 1, m: 1 }}>
                <strong>{options[selectedIndex]}</strong>
            </Button>
            <Menu
                id="sort-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={() => handleSelect(index)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </Stack>
    );
};

export default SortBy;