import {FC} from "react";
import {CardMedia, Stack, Typography} from "@mui/material";
import Banner from "../assets/main-pic.jpg"

interface MainSectionProps {

}

export const MainSection: FC<MainSectionProps> = () => {
    return <Stack sx={{paddingTop: '3rem'}}>
        <div style={{position: "relative"}}>
            <CardMedia component="img" style={{width: '100%', filter: 'brightness(50%)'}} image={Banner}/>
            <div style={{
                position: "absolute",
                color: "white",
                top: 150,
                left: "50%",
                transform: "translateX(-50%)",
            }}>
                <Typography sx={{fontWeight: 'bold'}} variant='h6'>
                    Sem pôjde úvodný text - niečo na štýl čo zoo ponúka...
                </Typography>
            </div>
        </div>
    </Stack>;
}