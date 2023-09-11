import {FC, useEffect} from "react";
import {Header} from "../components/common/Header";
import {Box, useMediaQuery} from "@mui/material";
import {FooterSection} from "../components/common/FooterSection";
import {MainSection} from "../components/mainpage/MainSection";

export const LandingView: FC = () => {
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
        document.title = 'Panthera Park'
    }, [])

    return <Box
        paddingTop={isMobile ? '130px' : '120px'}
        sx={{
            width: '100%',
            height: '100%',
        }}
        bgcolor='#f6efe3'
    >
        <Header/>
        <MainSection/>
        <FooterSection/>
    </Box>
}
