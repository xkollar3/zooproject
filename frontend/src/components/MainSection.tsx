import {FC} from "react";
import {Box, Button, Stack, Typography} from "@mui/material";
import Banner from "../assets/main-pic.jpg"
import animals from "../assets/animal_cards.json";
import {AnimalPaper} from "./AnimalPaper";
import {useNavigate} from "react-router-dom";

export const MainSection: FC = () => {
    const navigate = useNavigate();

    return <Box textAlign='center'>
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
                borderBottomRightRadius: '5%'
            }}>
                <Typography paddingTop="10rem" fontWeight='bold' variant='h5'>
                    Zažite deň v Panthera Parku!
                </Typography>
            </Box>
            <Button onClick={() => navigate('/opening-hours')} sx={{
                bgcolor: '#b73337',
                borderRadius: '30px',
                color: 'black',
                display: 'block',
                fontWeight: '700',
                minWidth: '243px',
                padding: '18px 62px',
                textAlign: 'center',
            }}>Otváracie hodiny</Button>
            <Typography fontWeight='bold' variant='h5' color='#b73337'>Nájdete u nás:</Typography>
            {animals.map(animal => <AnimalPaper id={animal.id}
                                                key={animal.id}
                                                name={animal.name}
                                                shortDescription={animal.shortDescription}
                                                animalFile={animal.animalFile}/>)}
            <Button onClick={() => navigate('/animals')} sx={{
                bgcolor: '#b73337',
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