import {FC} from "react";
import {Stack, Typography} from "@mui/material";

interface FareItemProps {
    sk: string,
    skNote: string,
    price: number,
    textColor: string,
}

export const FareItem: FC<FareItemProps> = (props: FareItemProps) => {
    return <Stack flexDirection='row' justifyContent='space-between' width='100%'>
        <Stack flexDirection='column'>
            <Typography fontFamily='Bebas Neue, sans-serif' color={props.textColor} variant='h5'>{props.sk}</Typography>
            <Typography fontFamily='Bebas Neue, sans-serif' color={props.textColor}
                        fontSize='15px'>{props.skNote}</Typography>
        </Stack>
        <Typography fontFamily='Bebas Neue, sans-serif' variant='h5'>{props.price === 0 ? 'ZDARMA' : props.price + ' €'}</Typography>
    </Stack>
}