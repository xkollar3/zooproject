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
            paddingTop: '120px',
            position: 'relative',
            width: '100%',
            zIndex: '100',
            "@media (max-width: 960px)" :  {
                paddingBottom: '0px'
            }
        }}
    >
        <Header/>
        <MainSection/>
        <FooterSection/>
    </Box>
}
