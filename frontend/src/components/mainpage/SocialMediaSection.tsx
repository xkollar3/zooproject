import {FC} from "react";
import {IconButton, Stack, Typography, useMediaQuery} from "@mui/material";
import {Link} from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {useRecoilValue} from "recoil";
import {langAtom} from "../../localization/lang";
import {translatePhrase} from "../../localization/translation";

export const SocialMediaSection: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    const lang = useRecoilValue(langAtom);

    return <Stack direction='column' alignItems='center' justifyContent='center'>
        <Typography fontWeight='1000' color='text.secondary' variant='h4'>{translatePhrase(lang, "SocialMediaCaption")}</Typography>
        <Stack padding='20px' direction={isMobile ? 'column' : 'row'}>
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
            <Link to="mailto:pantherapark123@gmail.com">
                <IconButton>
                    <Stack direction='column' alignItems='center'>
                        <MailOutlineIcon sx={{color: '#f8b957'}}/>
                        <Typography fontWeight='bold' color='black'>EMAIL</Typography>
                    </Stack>
                </IconButton>
            </Link>
        </Stack>
    </Stack>
}