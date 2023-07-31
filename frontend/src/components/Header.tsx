import {FC} from "react";
import {AppBar, IconButton, Stack, Typography} from "@mui/material";
import MenuDrawer from "./MenuDrawer";
import LanguageIcon from '@mui/icons-material/Language';
import Logo from '../assets/logo.svg'

interface HeaderProps {

}

export const Header: FC<HeaderProps> = () => {
    return <AppBar>
        <Stack alignItems='center'>
            <img style={{width: '60%', paddingTop: '20px'}} alt='logo' src={Logo}/>
            <Stack flexDirection='row' justifyContent='center' alignItems='center'>
                <IconButton>
                    <Typography padding='10' color='text.primary' variant='h6'>Slovensky</Typography>
                    <LanguageIcon style={{color:'black'}}/>
                </IconButton>
                <MenuDrawer/>
            </Stack>
        </Stack>
    </AppBar>;
}