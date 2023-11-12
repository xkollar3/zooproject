import {FC} from "react";
import {Box, useMediaQuery} from "@mui/material";
import {MapComponent} from "./MapComponent.tsx";
import {ContactComponent} from "./ContactComponent.tsx";

export const ContactSection: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
    const isMediumSize = useMediaQuery((theme: any) => theme.breakpoints.down("md"))

    return <Box minHeight='calc(100vh - 200px)' justifyContent='center' alignItems='center' display="flex" bgcolor='#f6efe3'
                flexDirection={isMobile || isMediumSize ? "column" : "row"}
                padding={isMobile ? '1rem' : '6rem 6rem 7rem 6rem'}>
            <MapComponent />
            <ContactComponent/>
    </Box>;
}
