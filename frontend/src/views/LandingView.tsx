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
            paddingTop: '120px',
            width: '100%',
            height: '100%',
            "@media (max-width: 960px)" :  {
                paddingBottom: 0,
                paddingTop: 0
            }
        }}
    >
        <Header/>
        <MainSection/>
        <FooterSection/>
    </Box>
}
