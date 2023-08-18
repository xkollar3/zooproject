import {FC} from "react";
import {Box, Button, Stack, Typography, useMediaQuery} from "@mui/material";
import Banner from "../assets/banner.jpg"
import {useNavigate} from "react-router-dom";
import {AboutSection} from "./AboutSection";

export const MainSection: FC = () => {
    const navigate = useNavigate();

    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return <Box textAlign='center' bgcolor='#f6efe3'>
        <Stack rowGap={1} alignItems='center'>
            <Box sx={{
                width: '100%',
                minHeight: '500px',
                position: 'relative',
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${Banner})`, // Set the Banner image as the background
                backgroundPosition: '50%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                color: 'white', // Set text color to white to improve visibility
                boxSizing: 'border-box',
                border: 0,
                fontSize: '100%',
                font: 'inherit',
                margin: 0,
                padding: 0,
                verticalAlign: 'baseline',
            }} marginTop={isMobile ? "50px" : "0px"}>
                <Typography paddingTop='22rem' fontWeight='bold' variant={isMobile ? 'h5' : 'h4'}>
                    Vítame Vás v Parku s najväčším množstvom mačkovitých šeliem v Európe!
                </Typography>
            </Box>
            <AboutSection/>
            <Button onClick={() => navigate('/animals')} sx={{
                bgcolor: '#f8b957',
                borderRadius: '30px',
                color: 'black',
                display: 'block',
                fontWeight: '700',
                minWidth: '243px',
                padding: '18px 62px',
                textAlign: 'center',
                marginBottom: '20px'
            }}>Prehľad zvierat</Button>
        </Stack>
    </Box>
        ;
}
