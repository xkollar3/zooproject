import {FC, useEffect} from "react";
import {Box, useMediaQuery} from "@mui/material";
import {Header} from "../components/common/Header";
import {FooterSection} from "../components/common/FooterSection";
import {OpeningHoursSection} from "../components/openinghours/OpeningHoursSection";

export const OpeningHoursView: FC = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    useEffect(() => {
        handleScrollToTop();
        document.title = 'Otváracie hodiny'
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
        <OpeningHoursSection/>
        <FooterSection/>
    </Box>;
}