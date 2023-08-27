import {FC} from "react";
import {Box, useMediaQuery} from "@mui/material";
import {OpeningHoursCard} from "./OpeningHoursCard";

export const OpeningHoursSection: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return <Box bgcolor='#f6efe3' width='100%' minHeight='600px' display='flex'
                justifyContent='center' alignItems='center'
                gap={6}
                paddingTop={isMobile ? '40px' : '0px'}
                paddingBottom={isMobile ? '40px' : '0px'}
                flexDirection={isMobile ? 'column' : 'row'}>
        <OpeningHoursCard key={'normal'} start={'Marec'} end={'November'}
                          weekday={{from: '10:00', to: '18:00'}}
                          weekend={{from: '9:00', to: '18:00'}}
                          bgColor={'#f8b957'}
                          note1={'* Otvorené aj cez sviatky'}
                          note2={'* Kasa otvorená do 17:30'}
                          width={isMobile ? '90%' : '50%'}
        />
        <OpeningHoursCard key={'winter'} start={'December'} end={'Február'}
                          weekday={{from: '10:00', to: '16:00'}}
                          weekend={{from: '9:00', to: '16:00'}} bgColor={'#f8b957'}
                          note1={'* Otvorené aj cez sviatky, vrátane Vianoc'}
                          note2={'* Kasa otvorená do 15:30'}
                          width={isMobile ? '90%' : '50%'}
        />
    </Box>
}