import {FC} from "react";
import {Box, CardMedia, Divider, Stack, Typography, useMediaQuery} from "@mui/material";
import FooterLogo from '../assets/footer_logo.jpg';

export const FooterSection: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return isMobile ? <FooterSectionMobile/> : <FooterSectionWide/>;
}

const FooterSectionWide: FC = () => {
    return <footer>
        <Stack textAlign='center' display='flex' width='100%' bgcolor='#44321e'>
            <Divider/>
            <Stack padding='20px' justifyContent='space-evenly' flexDirection='row' color='white'>
                <Stack width='33%' fontSize='1px' alignItems='center'>
                    <Typography fontWeight='bold'>Návštevnícka adresa</Typography>
                    <Typography>Turá 123</Typography>
                    <Typography>PSČ: 935 51</Typography>
                </Stack>
                <Stack width='33%' fontSize='1px' alignItems='center'>
                    <Typography fontWeight='bold'>Kontaktné info</Typography>
                    <Typography>Tel.: +421 903 532 433</Typography>
                    <Typography>Email: pantherapark123@gmail.com</Typography>
                </Stack>
                <Box width='33%'>
                    <CardMedia component='img' alt='logo_reduced' src={FooterLogo}/>
                </Box>
            </Stack>
        </Stack>
    </footer>;
}

const FooterSectionMobile: FC = () => {
    return <footer>
        <Stack display='flex' flexDirection='column' textAlign='center' width='100%' bgcolor='#44321e'>
            <Divider/>
            <Stack rowGap={5} padding='20px' justifyContent='space-evenly' flexDirection='column' color='white'>
                <Stack width='100%' fontSize='1px' alignItems='center'>
                    <Typography fontWeight='bold'>Návštevnícka adresa</Typography>
                    <Typography>Turá 123</Typography>
                    <Typography>PSČ: 935 51</Typography>
                </Stack>
                <Stack width='100%' fontSize='1px' alignItems='center'>
                    <Typography fontWeight='bold'>Kontaktné info</Typography>
                    <Typography>Tel.: +421 903 532 433</Typography>
                    <Typography>Email: pantherapark123@gmail.com</Typography>
                </Stack>
                <Box width='100%'>
                    <CardMedia component='img' alt='logo_reduced' src={FooterLogo}/>
                </Box>
            </Stack>
        </Stack>
    </footer>;
}

