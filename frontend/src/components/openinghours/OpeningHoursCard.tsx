import {FC} from "react";
import {Box, Divider, Stack, Typography, useMediaQuery} from "@mui/material";
import {useRecoilValue} from "recoil";
import {langAtom} from "../../localization/lang";
import {translatePhrase} from "../../localization/translation";

interface OpeningHoursCardProps {
    key: string,
    start: string,
    end: string,
    weekday: {
        from: string,
        to: string
    },
    weekend: {
        from: string,
        to: string,
    }
    bgColor: string,
    note1: string,
    note2: string,
    width: string,
}

export const OpeningHoursCard: FC<OpeningHoursCardProps> = (props: OpeningHoursCardProps) => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));
    const lang = useRecoilValue(langAtom);

    return <Box maxWidth='400px' height='450px' width={props.width}
                style={isMobile ? {} : {boxShadow: '16px 10px 17px 0px rgba(0,0,0,0.45)'}}
                bgcolor={props.bgColor} padding={isMobile ? '15px 0px 15px 0px' : '15px'} alignItems='center'
                justifyContent='center'>
        <Box width='100%' display='flex' flexDirection='column' rowGap={3}>
            <Typography fontFamily='Anton, sans-serif' align='center'
                        variant='h4'>{props.start} - {props.end}</Typography>
            <Stack alignItems='center'>
                <Typography fontFamily='Bebas Neue, sans-serif' variant='h4'>{translatePhrase(lang, 'OpeningHoursWorkDays')}</Typography>
                <Typography variant='h4'>{props.weekday.from} - {props.weekday.to}</Typography>
            </Stack>
            <Divider sx={{width: '100%'}}/>
            <Stack alignItems='center'>
                <Typography fontFamily='Bebas Neue, sans-serif' variant='h4'>{translatePhrase(lang, 'OpeningHoursWeekend')}</Typography>
                <Typography variant='h4'>{props.weekend.from} - {props.weekend.to}</Typography>
            </Stack>
            <Typography fontFamily='Bebas Neue, sans-serif' align='center' variant='h5'>{props.note1}</Typography>
            <Typography fontFamily='Bebas Neue, sans-serif' align='center' variant='h5'>{props.note2}</Typography>
        </Box>
    </Box>
}
