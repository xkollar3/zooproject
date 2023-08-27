import {FC} from "react";
import {Box, Divider, Stack, Typography} from "@mui/material";

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
    return <Box maxWidth='400px' minHeight='400px' width={props.width} style={{boxShadow: '16px 10px 17px 0px rgba(0,0,0,0.45)'}}
                bgcolor={props.bgColor} padding='15px'>
        <Box width='100%' display='flex' flexDirection='column' rowGap={3}>
            <Typography fontFamily='Anton, sans-serif' align='center' variant='h4'>{props.start} - {props.end}</Typography>
            <Stack alignItems='center'>
                <Typography fontFamily='Bebas Neue, sans-serif' variant='h4'>Pracovné dni</Typography>
                <Typography variant='h4'>{props.weekday.from} - {props.weekday.to}</Typography>
            </Stack>
            <Divider sx={{ width: '100%' }} />
            <Stack alignItems='center'>
                <Typography fontFamily='Bebas Neue, sans-serif' variant='h4'>Víkend</Typography>
                <Typography variant='h4'>{props.weekend.from} - {props.weekend.to}</Typography>
            </Stack>
            <Typography fontFamily='Bebas Neue, sans-serif' align='center' variant='h5'>{props.note1}</Typography>
            <Typography  fontFamily='Bebas Neue, sans-serif' align='center' variant='h5'>{props.note2}</Typography>
        </Box>
    </Box>
}
