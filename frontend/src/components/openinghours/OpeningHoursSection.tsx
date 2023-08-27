import {FC} from "react";
import {Box, Stack, Typography, useMediaQuery} from "@mui/material";
import {OpeningHoursCard} from "./OpeningHoursCard";

export const OpeningHoursSection: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return <Box bgcolor='#f6efe3' width='100%' minHeight='600px' display='flex'
                justifyContent='center' alignItems='center'
                paddingTop='40px'
                paddingBottom='40px'
                flexDirection='column'
                >
        <Typography color='#44321e' fontFamily='Anton, sans-serif' align='center' marginBottom='20px'
                    variant={isMobile ? 'h3' : 'h2'}>Otváracie hodiny</Typography>
        <Stack alignItems='center' justifyContent='center' width='100%' gap={6} flexDirection={isMobile ? 'column' : 'row'}>
            <OpeningHoursCard key={'normal'} start={'Marec'} end={'November'}
                              weekday={{from: '10:00', to: '18:00'}}
                              weekend={{from: '9:00', to: '18:00'}}
                              bgColor={'#f8b957'}
                              note1={'* Otvorené aj cez sviatky'}
                              note2={'* Kasa otvorená do 17:30'}
                              width={isMobile ? '100%' : '50%'}
            />
            <OpeningHoursCard key={'winter'} start={'December'} end={'Február'}
                              weekday={{from: '10:00', to: '16:00'}}
                              weekend={{from: '9:00', to: '16:00'}} bgColor={'#f8b957'}
                              note1={'* Otvorené aj cez sviatky, vrátane Vianoc'}
                              note2={'* Kasa otvorená do 15:30'}
                              width={isMobile ? '100%' : '50%'}
            />
        </Stack>
    </Box>
}