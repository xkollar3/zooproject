import {FC, useEffect} from "react";
import {Box, useMediaQuery} from "@mui/material";
import {VisitingPolicySection} from "../components/visitingpolicy/VisitingPolicySection";
import {Header} from "../components/common/Header";
import {FooterSection} from "../components/common/FooterSection";

export const VisitingPolicyView: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    useEffect(() => {
        document.title = 'Návštevnícky Poriadok'
    }, [])

    return<Box
            paddingTop={isMobile ? '0px' : '120px'}
            sx={{
                width: '100%',
                height: '100%'
            }}
        >
            <Header/>
            <VisitingPolicySection/>
            <FooterSection/>
        </Box>;
}