import {FC, useEffect} from "react";
import {Box, useMediaQuery} from "@mui/material";
import {Header} from "../components/common/Header";
import {FooterSection, FooterSectionMobileContact} from "../components/common/FooterSection";
import {ContactSection} from "../components/contact/ContactSection";

export const ContactView: FC = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

    useEffect(() => {
        handleScrollToTop();
        document.title = 'Kontakt'
    }, [])

    return<Box
        paddingTop={isMobile ? '130px' : '120px'}
        sx={{
            width: '100%',
            height: '100%'
        }}
        bgcolor='#f6efe3'
    >
        <Header/>
        <ContactSection/>
        {isMobile ? <FooterSectionMobileContact /> : <FooterSection/>}
    </Box>;
}
