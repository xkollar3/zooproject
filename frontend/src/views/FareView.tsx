import {Box, useMediaQuery} from "@mui/material";
import {FC, useEffect} from "react";
import {Header} from "../components/Header";
import {FooterSection} from "../components/FooterSection";
import {FareSection} from "../components/fare/FareSection";

export const FareView: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    useEffect(() => {
        document.title = 'Cenník'
    }, [])

    return<Box
        paddingTop={isMobile ? '0px' : '120px'}
        sx={{
            width: '100%',
            height: '100%'
        }}
    >
        <Header/>
        <FareSection/>
        <FooterSection/>
    </Box>;
}