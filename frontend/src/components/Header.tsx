import {FC} from "react";
import {AppBar, IconButton, Stack, Typography, useMediaQuery} from "@mui/material";
import MenuDrawer from "./MenuDrawer";
import LanguageIcon from '@mui/icons-material/Language';
import Logo from '../assets/logo.svg'

interface HeaderProps {

}

export const Header: FC<HeaderProps> = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return isMobile ? <MobileHeader/> : <NormalHeader/>;
}

const MobileHeader: FC = () => {
    return <AppBar>
        <Stack alignItems='center' bgcolor='#f6efe3'>
            <img style={{width: '60%', paddingTop: '20px'}} alt='logo' src={Logo}/>
            <Stack flexDirection='row' justifyContent='center' alignItems='center' bgcolor='#f6efe3'>
                <IconButton>
                    <Typography padding='10' color='#442e1d' variant='h6'>Slovensky</Typography>
                    <LanguageIcon style={{color: 'black'}}/>
                </IconButton>
                <MenuDrawer/>
            </Stack>
        </Stack>
    </AppBar>;
}


const NormalHeader: FC = () => {
    return <AppBar>
        <Stack padding={1} columnGap={8} flexDirection='row' justifyContent='center' alignItems='baseline' bgcolor='#f6efe3'>
            <IconButton>
                <Typography color='#442e1d' variant='h6'>Slovensky</Typography>
                <LanguageIcon style={{color: 'black'}}/>
            </IconButton>
            <img style={{width: '20%', paddingTop: '20px'}} alt='logo' src={Logo}/>
            <MenuDrawer/>
        </Stack>
    </AppBar>;
}