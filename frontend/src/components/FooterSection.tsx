import {FC} from "react";
import {Divider, IconButton, Stack, Typography} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from "react-router-dom";

interface FooterSectionProps {

}

export const FooterSection: FC<FooterSectionProps> = () => {
    return <footer>
        <Stack textAlign='center' display='flex' width='100%' bgcolor='#442e1d'>
            <Divider/>
            <Stack padding='20px' justifyContent='space-evenly' flexDirection='row' color='white'>
                <Stack fontSize='1px' alignItems='center'>
                    <Typography fontWeight='bold'>Návštevná adresa</Typography>
                    <Typography>Turá 123</Typography>
                    <Typography>PSČ: 935 51</Typography>
                </Stack>
                <Stack fontSize='1px' alignItems='center'>
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
            </Stack>
        </Stack>
    </footer>;
}
