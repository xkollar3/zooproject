import {FC} from "react";
import {CardMedia, Stack, Typography, useMediaQuery} from "@mui/material";

interface ContactInfoItemProps {
    sk: string,
    icon: string,
}

export const ContactInfoItem: FC<ContactInfoItemProps> = (props: ContactInfoItemProps) => {
    const isMediumSize = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

    return <Stack gap={2} direction='row' alignItems='center' justifyContent='center'
                  width='100%'>
        <CardMedia style={{width: '20px', height: '20px', objectFit: 'contain'}} component='img'
                               alt='icon of item'
                               src={props.icon}/>
        <Typography fontFamily='Bebas Neue, sans-serif' align='left' variant={isMediumSize ? 'h6' : 'h5'}>{props.sk}</Typography>
    </Stack>;
}
