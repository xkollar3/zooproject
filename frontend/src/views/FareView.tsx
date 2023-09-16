import {Box, useMediaQuery} from "@mui/material";
import {FC, useEffect} from "react";
import {FareSection} from "../components/fare/FareSection";
import {Header} from "../components/common/Header";
import {FooterSection} from "../components/common/FooterSection";
import {useRecoilValue} from "recoil";
import {langAtom} from "../localization/lang";
import {translatePhrase} from "../localization/translation";

export const FareView: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const lang = useRecoilValue(langAtom);

    useEffect(() => {
        handleScrollToTop();
        document.title = translatePhrase(lang, 'MenuFares');
    }, [lang])

    return<Box
        paddingTop={isMobile ? '130px' : '130px'}
        sx={{
            width: '100%',
            height: '100%'
        }}
        bgcolor='#f6efe3'
    >
        <Header/>
        <FareSection/>
        <FooterSection/>
    </Box>;
}