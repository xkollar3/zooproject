import {FC, useEffect} from "react";
import {Box, useMediaQuery} from "@mui/material";
import {Header} from "../components/common/Header";
import {FooterSection} from "../components/common/FooterSection";
import {OpeningHoursSection} from "../components/openinghours/OpeningHoursSection";
import {useRecoilValue} from "recoil";
import {langAtom} from "../localization/lang";
import {translatePhrase} from "../localization/translation";

export const OpeningHoursView: FC = () => {
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
        document.title = translatePhrase(lang, 'MenuOpeningHours');
    }, [lang])

    return <Box
        paddingTop={isMobile ? '130px' : '120px'}
        sx={{
            width: '100%',
            height: '100%'
        }}
        bgcolor='#f6efe3'
    >
        <Header/>
        <OpeningHoursSection/>
        <FooterSection/>
    </Box>;
}