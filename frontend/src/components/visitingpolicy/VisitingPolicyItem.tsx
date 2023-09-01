import {FC} from "react";
import {Box, CardMedia, Stack, Typography, useMediaQuery} from "@mui/material";

interface VisitingPolicyItemProps {
    text: string,
    icon: string,
    circular: boolean,
    textColor: string,
}

export const VisitingPolicyItem: FC<VisitingPolicyItemProps> = (props: VisitingPolicyItemProps) => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return <Stack gap={2} direction='row' alignItems='center' justifyContent='flex-start'
                  width='95%'>
        <Box>
            {
                props.circular ?
                    <CardMedia style={{borderRadius: '50%', width: '100px', height: '100px', objectFit: 'contain'}}
                               component='img'
                               alt='icon of item'
                               src={props.icon}/> :
                    <CardMedia style={{width: '100px', height: '100px', objectFit: 'contain'}} component='img'
                               alt='icon of item'
                               src={props.icon}/>
            }
        </Box>
        <Box>
            <Typography fontFamily='Bebas Neue, sans-serif' color={props.textColor} align='left' variant={isMobile ? 'h6' : 'h5'}>{props.text}</Typography>
        </Box>
    </Stack>;
}