import {FC} from "react";
import {CardMedia, Paper, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

interface AnimalPaperProps {
    id: number,
    key: number,
    name: string,
    shortDescription: string,
    animalFile: string
}

export const AnimalPaper: FC<AnimalPaperProps> = (animalPaperProps) => {
    return <Paper key={animalPaperProps.id} variant='outlined' style={{margin: '12px', background: '#dcdcc6'}}>
        <Stack padding='8px'>
            <CardMedia component='img' alt='animal picture' width='100%' sx={{borderRadius: '5%'}} src={animalPaperProps.animalFile}/>
            <Typography variant='h6' color='text.primary'>{animalPaperProps.shortDescription}</Typography>
            <Link to={"/" + animalPaperProps.id}>
                <Typography variant='h6'>Prečítať viac</Typography>
            </Link>
        </Stack>
    </Paper>
}
