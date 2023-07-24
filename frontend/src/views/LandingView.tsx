import {FC} from "react";
import {Box} from "@mui/material";
import {Header} from "../components/Header";
import {MainSection} from "../components/MainSection";
import {FooterSection} from "../components/FooterSection";

interface LandingViewProps {

}

export const LandingView: FC<LandingViewProps> = () => {
    return <Box>
        <Header/>
        <MainSection/>
        <FooterSection/>
    </Box>
}