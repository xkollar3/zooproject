import {FC} from "react";
import {Box, CardMedia, Stack, Typography, useMediaQuery} from "@mui/material";
import AboutPic from "../assets/animal_about.jpg";

const aboutSectionText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lacus consectetur,\n' +
    '                rutrum\n' +
    '                arcu at, accumsan mauris. In tempus venenatis dolor, eu aliquet ex varius ac. Phasellus dictum\n' +
    '                condimentum justo id ultrices. Duis luctus eget orci et mattis. Nulla ut ultricies orci. Sed\n' +
    '                auctor\n' +
    '                ultricies enim, et interdum ex pulvinar quis. In hac habitasse platea dictumst. Integer\n' +
    '                suscipit.';

const aboutSectionCaption: string = 'O nás';

export const AboutSection: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return isMobile ? <AboutSectionMobile/> : <AboutSectionNormal/>;
}


const AboutSectionNormal: FC = () => {
    return <Stack display='flex' direction='row' spacing={2} width='60%' margin='25px'>
        <Box width='50%' justifyContent='center' alignItems='center' display='flex'>
            <CardMedia style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}} component='img'
                       alt="about section animal img" src={AboutPic}/>
        </Box>
        <div style={{
            borderLeft: '6px solid #a19c60',
            width: '5%'
        }}/>
        <Stack width='45%' display='flex' direction='column' className="text_container">
            <Typography variant='h4'>{aboutSectionCaption}</Typography>
            <Typography variant='h6'>{aboutSectionText}</Typography>
        </Stack>
    </Stack>;
}

const AboutSectionMobile: FC = () => {
    return <Stack display='flex' direction='column' spacing={2} width='85%' margin='25px'>
        <Box width='100%' justifyContent='center' alignItems='center'>
            <CardMedia style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}} component='img'
                       alt="about section animal img" src={AboutPic}/>
        </Box>
        <div style={{
            borderBottom: '6px solid #a19c60',
            width: '100%'
        }}/>
        <Stack width='100%' display='flex' direction='column'>
            <Typography variant='h4'>{aboutSectionCaption}</Typography>
            <Typography variant='h6'>{aboutSectionText}</Typography>
        </Stack>
    </Stack>;
}