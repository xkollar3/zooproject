import {FC} from "react";
import {Header} from "../components/Header";
import {MainSection} from "../components/MainSection";
import {Box} from "@mui/material";
import {FooterSection} from "../components/FooterSection";

interface LandingViewProps {

}

export const LandingView: FC<LandingViewProps> = () => {
    return <Box
        sx={{
            minHeight: '100vh',
            overflow: 'hidden',
            padding: '120px 0 60px',
            position: 'relative',
            width: '100%',
            zIndex: '100'
        }}
    >
        <Header/>
        <MainSection/>
        <FooterSection/>
    </Box>
}