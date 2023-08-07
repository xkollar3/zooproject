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

    return <AppBar>
        <Stack alignItems='center' bgcolor='#f6efe3'>
            <img style={{width: isMobile ? '60%' : '15%', paddingTop: '20px'}} alt='logo' src={Logo}/>
            <Stack flexDirection='row' justifyContent='center' alignItems='center' bgcolor='#f6efe3'>
                <IconButton>
                    <Typography padding='10' color='#442e1d' variant='h6'>Slovensky</Typography>
                    <LanguageIcon style={{color:'black'}}/>
                </IconButton>
                <MenuDrawer/>
            </Stack>
        </Stack>
    </AppBar>;
}
