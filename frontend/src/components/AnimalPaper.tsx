import { FC } from 'react';
import {CardMedia, Paper, Stack, Typography} from '@mui/material';

interface AnimalPaperProps {
    id: number;
    name: string;
    shortDescription: string;
    animalFile: string;
}

export const AnimalPaper: FC<AnimalPaperProps> = (animalPaperProps) => {
    return (
        <Paper
            key={animalPaperProps.id}
            sx={{
                margin: '12px',
                background: '#f6efe3',
                color: '#ddcbaf',
                '@media (min-width: 960px)': {
                    width: '25%',
                },
            }}
        >
            <Stack padding="8px" justifyContent='flex-start'>
                <div
                    style={{
                        position: 'relative',
                        paddingBottom: '75%', // Set the aspect ratio to maintain (adjust as needed)
                        borderRadius: '5%',
                        overflow: 'hidden',
                    }}
                >
                    <CardMedia
                        component="img"
                        alt="animal picture"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                        src={animalPaperProps.animalFile}
                    />
                </div>
                <Typography variant="h6" color='#44321d'>
                    {animalPaperProps.shortDescription}
                </Typography>
                {/* change link to button or make the cards clickable with animation}
                {/*<Link to={`/${animalPaperProps.id}`}>*/}
                {/*    <Typography variant="h6">Prečítať viac</Typography>*/}
                {/*</Link>*/}
            </Stack>
        </Paper>
    );
};
