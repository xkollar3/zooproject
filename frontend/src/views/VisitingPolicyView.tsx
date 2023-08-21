import {FC} from "react";
import {Header} from "../components/Header";
import {FooterSection} from "../components/FooterSection";
import {Box} from "@mui/material";
import {VisitingPolicySection} from "../components/visitingpolicy/VisitingPolicySection";

export const VisitingPolicyView: FC = () => {
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
        <VisitingPolicySection/>
        <FooterSection/>
    </Box>
}