import {FC} from "react";
import {Box, CardMedia, Divider, IconButton, Stack, Typography, useMediaQuery} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from "react-router-dom";
import FooterLogo from '../assets/footer_logo.jpg';

export const FooterSection: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return isMobile ? <FooterSectionMobile/> : <FooterSectionWide/>;
}

const FooterSectionWide: FC = () => {
    return <footer>
        <Stack textAlign='center' display='flex' width='100%' bgcolor='#442e1d'>
            <Divider/>
            <Stack padding='20px' justifyContent='space-evenly' flexDirection='row' color='white'>
                <Stack width='20%' fontSize='1px' alignItems='center'>
                    <Typography fontWeight='bold'>Návštevnícka adresa</Typography>
                    <Typography>Turá 123</Typography>
                    <Typography>PSČ: 935 51</Typography>
                </Stack>
                <Stack width='20%' fontSize='1px' alignItems='center'>
                    <Typography fontWeight='bold'>Médiá</Typography>
                    <Link to="https://www.facebook.com/profile.php?id=100095276537413">
                        <IconButton>
                            <FacebookIcon sx={{color: 'white'}}/>
                            <Typography color='white'>Facebook</Typography>
                        </IconButton>
                    </Link>
                    <Link to="https://www.instagram.com/panthera_park/">
                        <IconButton>
                            <InstagramIcon sx={{color: 'white'}}/>
                            <Typography color='white'>Instagram</Typography>
                        </IconButton>
                    </Link>
                </Stack>
                <Stack width='20%' fontSize='1px' alignItems='center'>
                    <Typography fontWeight='bold'>Kontaktné info</Typography>
                    <Typography>Tel.: +421 903 532 433</Typography>
                    <Typography>Email: pantherapark123@gmail.com</Typography>
                </Stack>
                <Box width='20%'>
                    <CardMedia component='img' alt='logo_reduced' src={FooterLogo}/>
                </Box>
            </Stack>
        </Stack>
    </footer>;
}

const FooterSectionMobile: FC = () => {
    return <footer>
        <Stack display='flex' flexDirection='column' textAlign='center' width='100%' bgcolor='#442e1d'>
            <Divider/>
            <Stack rowGap={5} padding='20px' justifyContent='space-evenly' flexDirection='column' color='white'>
                <Stack width='100%' fontSize='1px' alignItems='center'>
                    <Typography fontWeight='bold'>Návštevnícka adresa</Typography>
                    <Typography>Turá 123</Typography>
                    <Typography>PSČ: 935 51</Typography>
                </Stack>
                <Stack width='100%' fontSize='1px' alignItems='center'>
                    <Typography fontWeight='bold'>Médiá</Typography>
                    <Link to="https://www.facebook.com/profile.php?id=100095276537413">
                        <IconButton>
                            <FacebookIcon sx={{color: 'white'}}/>
                            <Typography color='white'>Facebook</Typography>
                        </IconButton>
                    </Link>
                    <Link to="https://www.instagram.com/panthera_park/">
                        <IconButton>
                            <InstagramIcon sx={{color: 'white'}}/>
                            <Typography color='white'>Instagram</Typography>
                        </IconButton>
                    </Link>
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

