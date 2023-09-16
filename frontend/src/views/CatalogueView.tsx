import {FC, useEffect} from "react";
import {Box, useMediaQuery} from "@mui/material";
import {Header} from "../components/common/Header";
import {FooterSection} from "../components/common/FooterSection";
import {CatalogueSection} from "../components/catalogue/CatalogueSection";
import {useRecoilValue} from "recoil";
import {langAtom} from "../localization/lang";
import {translatePhrase} from "../localization/translation";

export const CatalogueView: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    const lang = useRecoilValue(langAtom);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        handleScrollToTop();
        document.title = translatePhrase(lang, 'MenuAnimals');
    }, [lang])

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