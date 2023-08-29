import {FC, useState} from "react";
import animals from '../../../public/animals/animals.json';
import {Box, IconButton, Stack, Typography} from "@mui/material";
import {CataloguePage} from "./CataloguePage";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const pageSize: number = 15;

export const CatalogueSection: FC = () => {
    const [page, setPage] = useState(0);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    const handleClickDown = () => {
        setPage(page > 0 ? page - 1 : page);
        handleScrollToTop();
    }

    const handleClickUp = () => {
        setPage((page + 1) * pageSize < animals.length ? page + 1 : page);
        handleScrollToTop();
    }

    return <Box minHeight='600px' flexDirection='column' display='flex' justifyContent='center' alignItems='center'>
        <CataloguePage animals={animals} page={page} pageSize={pageSize}/>
        <Stack flexDirection='row' alignItems='center' gap={2}>
            <IconButton onClick={handleClickDown}>
                <ArrowBackIosNewIcon style={{color: 'black'}}/>
            </IconButton>
            <Typography variant='h5'>{page + 1}</Typography>
            <IconButton onClick={handleClickUp}>
                <ArrowForwardIosIcon style={{color: 'black'}}/>
            </IconButton>
        </Stack>
    </Box>
}