import {FC} from "react";
import {AppBar, Stack} from "@mui/material";
import MenuDrawer from "./MenuDrawer";
import Logo from '../assets/logo.svg'

interface HeaderProps {

}

export const Header: FC<HeaderProps> = () => {
    return <AppBar sx={{borderRadius: '16px'}}>
        <Stack alignItems='center'>
            <img style={{width : '70%', paddingTop: '20px'}} alt='logo' src={Logo}/>
            <MenuDrawer/>
        </Stack>
    </AppBar>;
}