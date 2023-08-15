import {FC} from "react";
import {Box, Button, Stack, Typography, useMediaQuery} from "@mui/material";
import Banner from "../assets/banner.jpg"
import animals from "../assets/animal_cards.json";
import {AnimalPaper} from "./AnimalPaper";
import {useNavigate} from "react-router-dom";

export const MainSection: FC = () => {
    const navigate = useNavigate();

    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    const animalsToDisplay = isMobile ? animals.slice(0, 1) : animals.slice(0, 2);

    return <Box textAlign='center' bgcolor='#f6efe3'>
        <Stack rowGap={1} alignItems='center'>
            <Box sx={{
                width: '100%',
                minHeight: '400px',
                position: 'relative',
                backgroundImage: `url(${Banner})`, // Set the Banner image as the background
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
            }} marginTop={isMobile ? "50px" : "0"}>
                <Typography paddingTop='18rem' fontWeight='bold' variant={isMobile ? 'h5' : 'h4'}>
                    Vítame Vás v Parku s najväčším množstvom mačkovitých šeliem v Európe!
                </Typography>
            </Box>
            <Button onClick={() => navigate('/opening-hours')} sx={{
                bgcolor: '#f8b957',
                borderRadius: '30px',
                color: 'black',
                display: 'block',
                fontWeight: '700',
                minWidth: '243px',
                padding: '18px 62px',
                textAlign: 'center',
            }}>Otváracie hodiny</Button>
            <Typography fontWeight='bold' variant='h5' color='#b6490c'>Nájdete u nás:</Typography>
            <Stack display="flex" flexDirection={isMobile ? "column" : "row"} justifyContent='center'>
                {animalsToDisplay.map(animal => <AnimalPaper id={animal.id}
                                                             key={animal.id}
                                                             name={animal.name}
                                                             shortDescription={animal.shortDescription}
                                                             animalFile={animal.animalFile}/>)}
            </Stack>
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
            }}>Všetky zvieratá</Button>
        </Stack>
    </Box>
        ;
}
