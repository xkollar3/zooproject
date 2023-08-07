import {FC} from "react";
import {Box, Button, Stack, Typography, useMediaQuery} from "@mui/material";
import Banner from "../assets/main-pic.jpg"
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
                position: 'relative',
                backgroundImage: `url(${Banner})`, // Set the Banner image as the background
                backgroundSize: 'cover', // Set background size to 100% width, auto height
                backgroundPosition: 'center', // Center the background image
                color: 'white', // Set text color to white to improve visibility
                minHeight: '200px',
                width: '100%',
                borderBottomLeftRadius: '5%',
                borderBottomRightRadius: '5%',
                "@media (min-width: 960px)": {
                    backgroundSize: "auto 100%", // Set background size to 100% width and auto height on PC
                },
            }}>
                <Typography paddingTop="10rem" fontWeight='bold' variant='h5'>
                    Zažite deň v Panthera Parku!
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
