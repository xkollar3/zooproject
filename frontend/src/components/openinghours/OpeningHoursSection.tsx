import {FC} from "react";
import {Box, Stack, Typography, useMediaQuery} from "@mui/material";
import {OpeningHoursCard} from "./OpeningHoursCard";
import {useRecoilValue} from "recoil";
import {langAtom} from "../../localization/lang";
import {translatePhrase} from "../../localization/translation";

export const OpeningHoursSection: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));
    const lang = useRecoilValue(langAtom);

    return <Box bgcolor='#f6efe3' width='100%' minHeight='600px' display='flex'
                justifyContent='center' alignItems='center'
                paddingTop='20px'
                paddingBottom='20px'
                flexDirection='column'
                >
        <Typography color='#44321e' fontFamily='Anton, sans-serif' align='center' marginBottom='20px'
                    variant={isMobile ? 'h3' : 'h2'}>{translatePhrase(lang, 'OpeningHoursCaption')}</Typography>
        <Stack alignItems='center' justifyContent='center' width='100%' gap={6} flexDirection={isMobile ? 'column' : 'row'}>
            <OpeningHoursCard key={'normal'} start={translatePhrase(lang, 'March')} end={translatePhrase(lang, 'November')}
                              weekday={{from: '10:00', to: '18:00'}}
                              weekend={{from: '9:00', to: '18:00'}}
                              bgColor={'#f8b957'}
                              note1={translatePhrase(lang, 'OpeningHoursNoteHolidaysSummer')}
                              note2={translatePhrase(lang, 'OpeningHoursNoteRegisterSummer')}
                              width={isMobile ? '100%' : '50%'}
            />
            <OpeningHoursCard key={'winter'} start={translatePhrase(lang, 'December')} end={translatePhrase(lang, 'February')}
                              weekday={{from: '10:00', to: '16:00'}}
                              weekend={{from: '9:00', to: '16:00'}} bgColor={'#f8b957'}
                              note1={translatePhrase(lang, 'OpeningHoursNoteHolidaysWinter')}
                              note2={translatePhrase(lang, 'OpeningHoursNoteRegisterWinter')}
                              width={isMobile ? '100%' : '50%'}
            />
        </Stack>
    </Box>
}