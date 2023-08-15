import {FC} from "react";
import {AppBar, IconButton, Stack, Typography, useMediaQuery} from "@mui/material";
import MenuDrawer from "./MenuDrawer";
import LanguageIcon from '@mui/icons-material/Language';
import Logo from '../assets/logo.jpg'
import Caption from '../assets/caption.jpg';

interface HeaderProps {

}

export const Header: FC<HeaderProps> = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return isMobile ? <MobileHeader/> : <NormalHeader/>;
}

const MobileHeader: FC = () => {
    return <AppBar>
        <Stack alignItems='center' bgcolor="#f6efe3">
            <img style={{width: '100%'}} alt='logo' src={Caption}/>
            <Stack flexDirection='row' justifyContent='center' alignItems='center'>
                <IconButton>
                    <Typography color='#442e1d' variant='h6'>Slovensky</Typography>
                    <LanguageIcon style={{color: 'black'}}/>
                </IconButton>
                <MenuDrawer/>
            </Stack>
        </Stack>
    </AppBar>;
}


const NormalHeader: FC = () => {
    return <AppBar position="absolute">
        <Stack columnGap={8} flexDirection='row' justifyContent='center' alignItems='center' bgcolor="#f6efe3">
            <IconButton>
                <Typography color='#442e1d' variant='h6'>Slovensky</Typography>
                <LanguageIcon style={{color: 'black'}}/>
            </IconButton>
            <img style={{width: '10%'}} alt='logo' src={Logo}/>
            <MenuDrawer/>
        </Stack>
    </AppBar>;
}