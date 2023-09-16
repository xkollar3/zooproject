import {FC, useEffect} from "react";
import {Box, useMediaQuery} from "@mui/material";
import {Header} from "../components/common/Header";
import {FooterSection, FooterSectionMobileContact} from "../components/common/FooterSection";
import {ContactSection} from "../components/contact/ContactSection";
import {useRecoilValue} from "recoil";
import {langAtom} from "../localization/lang";
import {translatePhrase} from "../localization/translation";

export const ContactView: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const lang = useRecoilValue(langAtom);

    useEffect(() => {
        handleScrollToTop();
        document.title = translatePhrase(lang, 'MenuContact');
    }, [lang])

    return<Box
        paddingTop={isMobile ? '130px' : '120px'}
        sx={{
            width: '100%',
            height: '100%'
        }}
        bgcolor='#f6efe3'
    >
        <Header/>
        <ContactSection/>
        {isMobile ? <FooterSectionMobileContact /> : <FooterSection/>}
    </Box>;
}
