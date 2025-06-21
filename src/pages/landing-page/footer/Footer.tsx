import React from "react";
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Link,
    IconButton,
    Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ViberIcon from "@mui/icons-material/PhoneInTalk";

export const Footer = () => {
    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Hvala što ste se prijavili!");
    };

    return (
        <Box
            component="footer"
            sx={{
                position: "relative",
                color: "#e1e4e8",
                pt: 8,
                pb: 6,
                overflow: "hidden",
                backgroundImage:
                    'url("https://pixnio.com/free-images/2019/01/23/2019-01-23-09-08-52.jpg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(13, 17, 23, 0.75)",
                    zIndex: 0,
                }}
            />

            <Container
                maxWidth="lg"
                sx={{ position: "relative", zIndex: 1 }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        gap: 4,
                    }}
                >
                    <Box sx={{ flex: "1 1 300px", minWidth: 280 }}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            Triply Holiday
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
                            Vaša pouzdana turistička agencija. Pružamo nezaboravne
                            destinacije i vrhunsku uslugu prilagođenu vašim željama.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Telefon:{" "}
                            <Link
                                href="tel:+38111222333"
                                color="inherit"
                                underline="hover"
                                sx={{ fontWeight: "medium" }}
                            >
                                +381 11 222 333
                            </Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Email:{" "}
                            <Link
                                href="mailto:info@triplyholiday.rs"
                                color="inherit"
                                underline="hover"
                                sx={{ fontWeight: "medium" }}
                            >
                                info@triplyholiday.rs
                            </Link>
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <IconButton
                                href="https://www.facebook.com/triplyholiday"
                                target="_blank"
                                rel="noopener"
                                aria-label="Facebook"
                                sx={{ color: "#4267B2" }}
                            >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                href="https://www.instagram.com/triplyholiday"
                                target="_blank"
                                rel="noopener"
                                aria-label="Instagram"
                                sx={{ color: "#C13584" }}
                            >
                                <InstagramIcon />
                            </IconButton>
                            <IconButton
                                href="https://wa.me/38111222333"
                                target="_blank"
                                rel="noopener"
                                aria-label="WhatsApp"
                                sx={{ color: "#25D366" }}
                            >
                                <WhatsAppIcon />
                            </IconButton>
                            <IconButton
                                href="viber://chat?number=%2B38111222333"
                                target="_blank"
                                rel="noopener"
                                aria-label="Viber"
                                sx={{ color: "#665CAC" }}
                            >
                                <ViberIcon />
                            </IconButton>
                        </Stack>
                    </Box>

                    <Box sx={{ flex: "1 1 150px", minWidth: 150 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Linkovi
                        </Typography>
                        <Stack spacing={1}>
                            <Link href="#" color="inherit" underline="hover">
                                O nama
                            </Link>
                            <Link href="#" color="inherit" underline="hover">
                                Destinacije
                            </Link>
                            <Link href="#" color="inherit" underline="hover">
                                Uslovi korišćenja
                            </Link>
                            <Link href="#" color="inherit" underline="hover">
                                Kontakt
                            </Link>
                        </Stack>
                    </Box>

                    <Box sx={{ flex: "1 1 300px", minWidth: 280 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Pretplatite se na novosti
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Ostanite u toku sa najnovijim ponudama i akcijama.
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubscribe}
                            sx={{ display: "flex", gap: 1 }}
                        >
                            <TextField
                                variant="filled"
                                placeholder="Vaš email"
                                type="email"
                                required
                                fullWidth
                                InputProps={{
                                    sx: {
                                        bgcolor: "rgba(33, 38, 45, 0.8)",
                                        color: "#e1e4e8",
                                        "& .MuiInputBase-input": { color: "#e1e4e8" },
                                    },
                                }}
                            />
                            <Button variant="contained" color="secondary" type="submit">
                                Pošalji
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Typography
                    variant="body2"
                    sx={{ mt: 6, textAlign: "center", opacity: 0.5 }}
                >
                    © {new Date().getFullYear()} Triply Holiday. Sva prava zadržana.
                </Typography>
            </Container>
        </Box>
    );
};

