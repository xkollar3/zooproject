import {FC, useEffect} from "react";
import {Header} from "../components/Header";
import {Box, useMediaQuery} from "@mui/material";
import {FooterSection} from "../components/FooterSection";
import {MainSection} from "../components/mainpage/MainSection";

interface LandingViewProps {

}

export const LandingView: FC<LandingViewProps> = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    useEffect(() => {
        document.title = 'Panthera Park'
    }, [])

    return <Box
        paddingTop={isMobile ? '0px' : '120px'}
        sx={{
            width: '100%',
            height: '100%',
        }}
    >
        <Header/>
        <MainSection/>
        <FooterSection/>
    </Box>
}
