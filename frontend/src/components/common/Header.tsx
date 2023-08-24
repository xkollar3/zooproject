import {FC} from "react";
import {AppBar, Button, IconButton, Stack, Typography, useMediaQuery} from "@mui/material";
import MenuDrawer from "./menu/MenuDrawer";
import LanguageIcon from '@mui/icons-material/Language';
import Logo from '../../assets/logo.jpg'
import Caption from '../../assets/caption.png';
import {useNavigate} from "react-router-dom";

interface HeaderProps {

}

export const Header: FC<HeaderProps> = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return isMobile ? <MobileHeader/> : <NormalHeader/>;
}

const MobileHeader: FC = () => {
    const navigate = useNavigate();

    const imageClick = () => {
        navigate('/');
    }

    return <AppBar>
        <Stack alignItems='center' bgcolor="#f6efe3" padding={1}>
            <Button onClick={imageClick}>
                <img style={{width: '85%'}} alt='logo' src={Caption}/>
            </Button>
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
    const navigate = useNavigate();

    const imageClick = () => {
        navigate('/');
    }

    return <AppBar position="absolute">
        <Stack width='100%' minHeight='130px' columnGap={8} flexDirection='row' justifyContent='center'
               alignItems='center' bgcolor="#f6efe3">
            <IconButton>
                <Typography color='#442e1d' variant='h6'>Slovensky</Typography>
                <LanguageIcon style={{color: 'black'}}/>
            </IconButton>
            <Button onClick={imageClick}>
                <img onClick={imageClick} style={{width: '140px'}} alt='logo' src={Logo}/>
            </Button>
            <MenuDrawer/>
        </Stack>
    </AppBar>;
}