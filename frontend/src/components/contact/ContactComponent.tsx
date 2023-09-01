import {Stack, Typography, useMediaQuery} from "@mui/material";
import contactInfo from "../../assets/contact_info.json";
import {ContactInfoItem} from "./ContactInfoItem.tsx";
import {useRecoilValue} from "recoil";
import {langAtom} from "../../localization/lang";
import {translatePhrase} from "../../localization/translation";

export const ContactComponent = () => {
    const isMediumSize = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
    const lang = useRecoilValue(langAtom);

    return <Stack rowGap={2} padding='20px' direction='column' alignItems='center' width={isMediumSize ? '90%' : '50%'}>
        <Typography color='#44321e' fontFamily='Anton, sans-serif' align='center' marginBottom='20px'
                    variant={isMediumSize ? 'h5' : 'h4'}>{translatePhrase(lang, 'ContactInfoCaption')}</Typography>
        {contactInfo.map((contactInfo, index) => <ContactInfoItem key={index} {...contactInfo}/>)}
    </Stack>;
}
