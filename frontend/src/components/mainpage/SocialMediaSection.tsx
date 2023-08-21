import {FC} from "react";
import {IconButton, Stack, Typography, useMediaQuery} from "@mui/material";
import {Link} from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const SocialMediaSection: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return <Stack direction='column'>
        <Typography fontWeight='1000' color='text.secondary' variant='h4'>Sociálne siete</Typography>
        <Stack padding='20px' alignItems='center' justifyContent='center'
               direction={isMobile ? 'column' : 'row'}>
            <Link to="https://www.facebook.com/profile.php?id=100095276537413">
                <IconButton>
                    <Stack direction='column' alignItems='center'>
                        <FacebookIcon sx={{color: '#f8b957'}}/>
                        <Typography fontWeight='bold' color='black'>FACEBOOK</Typography>
                    </Stack>
                </IconButton>
            </Link>
            <Link to="https://www.instagram.com/panthera_park/">
                <IconButton>
                    <Stack direction='column' alignItems='center'>
                        <InstagramIcon sx={{color: '#f8b957'}}/>
                        <Typography fontWeight='bold' color='black'>INSTAGRAM</Typography>
                    </Stack>
                </IconButton>
            </Link>
        </Stack>
    </Stack>
}