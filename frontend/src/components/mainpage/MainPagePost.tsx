import {FC} from "react";
import {Box, CardMedia, Stack, Typography, useMediaQuery} from "@mui/material";

export interface MainPagePostProps {
    caption: string,
    text: string,
    imagePath: string,
    reverse: boolean,
}

export const MainPagePost: FC<MainPagePostProps> = (props: MainPagePostProps) => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return isMobile ? <MainPagePostVertical {...props}/> : <MainPagePostHorizontal {...props}/>;
}


const MainPagePostHorizontal: FC<MainPagePostProps> = (props: MainPagePostProps) => {
    return <Stack overflow='auto' display='flex' direction={props.reverse ? 'row-reverse' : 'row'} spacing={2} minHeight='22rem' maxWidth='900px' margin='22px'>
        <Box width='49.5%' justifyContent='center' alignItems='center' display='flex'>
            <CardMedia style={{width: '100%', height: '95%', objectFit: 'cover'}} component='img'
                       alt="about section animal img" src={props.imagePath}/>
        </Box>
        <div style={{
            borderLeft: '6px solid #a19c60',
        }}/>
        <Stack width='49.5%' display='flex' direction='column' className="text_container" rowGap={2}>
            <Typography fontWeight='1000'  color='text.secondary' align='left' variant='h4'>{props.caption}</Typography>
            <Typography align='left' variant='h6'>{props.text}</Typography>
        </Stack>
    </Stack>;
}

const MainPagePostVertical: FC<MainPagePostProps> = (props: MainPagePostProps) => {
    return <Stack display='flex' direction='column' spacing={2} width='85%' margin='25px'>
        <Box width='100%' justifyContent='center' alignItems='center'>
            <CardMedia style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}} component='img'
                       alt="about section animal img" src={props.imagePath}/>
        </Box>
        <div style={{
            borderBottom: '6px solid #a19c60',
            width: '100%'
        }}/>
        <Stack width='100%' display='flex' direction='column'>
            <Typography fontWeight='1000' color='text.secondary' variant='h4'>{props.caption}</Typography>
            <Typography variant='h6'>{props.text}</Typography>
        </Stack>
    </Stack>;
}