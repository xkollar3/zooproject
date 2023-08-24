import {FC, useEffect} from "react";
import {Box, useMediaQuery} from "@mui/material";
import {Header} from "../components/common/Header";
import {FooterSection} from "../components/common/FooterSection";
import {ContactSection} from "../components/contact/ContactSection";

export const ContactView: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    useEffect(() => {
        document.title = 'Kontakt'
    }, [])

    return<Box
        paddingTop={isMobile ? '0px' : '120px'}
        sx={{
            width: '100%',
            height: '100%'
        }}
    >
        <Header/>
        <ContactSection/>
        <FooterSection/>
    </Box>;
}