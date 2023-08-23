import {FC} from "react";
import {Box, CardMedia, Container, Stack, Typography, useMediaQuery} from "@mui/material";
import fares from '../../assets/entry_categories.json';
import {FareItem} from "./FareItem";
import tickets from '/policy_icons/tickets.png';
import exclamationIcon from '../../assets/exclamation_mark.png';
import leaves from '../../assets/leaves.png';

export const FareSection: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return <Box display='flex' bgcolor='#f6efe3' alignItems='center' paddingBottom={isMobile ? '0px' : '50px'}
                paddingTop={isMobile ? '100px' : '50px'} flexDirection='column' rowGap={2} position='relative'>
        {!isMobile && <Box style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            zIndex: '1',
        }}>
            <CardMedia alt='Drawing of leaves' src={leaves} component='img'/>
        </Box>}
        <Container style={{paddingRight: 0, paddingLeft: 0, maxWidth: '900px'}}>
            <Stack rowGap={4} padding='50px' bgcolor='#f8ba57' direction='column' alignItems='center'
                   position='relative'>
                <Typography fontFamily='Anton, sans-serif' color='#44321e' align='center' marginBottom='20px'
                            variant={isMobile ? 'h5' : 'h3'}>Cena Vstupu</Typography>
                <Box width={isMobile ? '50px' : '75px'} height={isMobile ? '50px' : '75px'} style={{
                    position: 'absolute',
                    top: '50px',
                    right: '50px',
                }}>
                    <CardMedia component='img' alt='Tickets icon' src={tickets} style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%'
                    }}/>
                </Box>
                {fares.map((fare) => <FareItem {...fare} textColor='#44321e'/>)}
                <Stack flexDirection='row'>
                    <Box width={isMobile ? '50px' : '75px'} height={isMobile ? '50px' : '75px'}>
                        <CardMedia component='img' alt='Exclamation mark icon' src={exclamationIcon}/>
                    </Box>
                    <Stack>
                        <Typography fontFamily='Anton, sans-serif' variant='h6'>POPROSÍME ŠKOLY, ABY PRÍCHOD HLÁSILI
                            VOPRED NA NÁŠ MAIL</Typography>
                        <Typography align='center'>pantherapark123@gmail.com</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    </Box>;
}