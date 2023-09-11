import {FC, useEffect} from "react";
import {Box, useMediaQuery} from "@mui/material";
import {Header} from "../components/common/Header";
import {FooterSection} from "../components/common/FooterSection";
import {CatalogueSection} from "../components/catalogue/CatalogueSection";

export const CatalogueView: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        handleScrollToTop();
        document.title = 'Zvieratá'
    }, [])

    return <Box
        paddingTop={isMobile ? '130px' : '150px'}
        sx={{
            width: '100%',
            height: '100%'
        }}
        bgcolor='#f6efe3'
    >
        <Header/>
        <CatalogueSection/>
        <FooterSection/>
    </Box>;
}