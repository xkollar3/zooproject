import {FC, useState} from "react";
import {Box, CardMedia, Divider, Stack, Typography, useMediaQuery} from "@mui/material";
import {ItemModal} from "./ItemModal.tsx";

interface CatalogueItemProps {
    type: string,
    name: string,
    path: string,
}

export const CatalogueItem: FC<CatalogueItemProps> = (props: CatalogueItemProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const flipModal = () => {
        setIsHovered(false);
        setIsModalOpen(!isModalOpen);
    }

    const imageStyle = {
        transition: 'opacity 0.3s ease',
        backgroundColor: 'black',
        opacity: isHovered ? '0.5' : '1',
    };

    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return <Box width='300px' height='300px' bgcolor='#f8b957'
                style={isMobile ? {} : {boxShadow: '16px 10px 17px 0px rgba(0,0,0,0.45)'}}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={flipModal}>
        <Stack width='100%' height='100%' flexDirection='column' alignItems='center'>
            <Box width='100%' height='66%' style={{ overflow: 'hidden' }}>
                <CardMedia style={imageStyle} component='img' alt={'Picture of ' + props.type}
                           src={'/animals/' + props.path}
                sx={{objectFit: 'cover'}}/>
            </Box>
            <Stack width='100%' height='34%' alignItems='center' justifyContent='center'>
                <Typography align='center' variant='h5'>{props.type}</Typography>
                <Divider style={{width: '90%'}}/>
                <Typography variant='h6'>{props.name}</Typography>
            </Stack>
        </Stack>

        <ItemModal isOpen={isModalOpen} animal={props.name} onClose={flipModal} imgPath={props.path}/>
    </Box>
}