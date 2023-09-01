import {FC} from "react";
import {Box, CardMedia, Stack, Typography, useMediaQuery} from "@mui/material";
import policy from "../../assets/visiting_policy.json";
import policyAdditional from "../../assets/visiting_policy_additions.json";
import {VisitingPolicyItem} from "./VisitingPolicyItem";
import tree from '../../assets/tree.png';
import {translatePhrase} from "../../localization/translation";
import {Phrase} from "../../localization/phrases";
import {useRecoilValue} from "recoil";
import {langAtom} from "../../localization/lang";

export const VisitingPolicySection: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    const lang = useRecoilValue(langAtom);

    return <Box display='flex' bgcolor='#f6efe3' padding={isMobile ? '0px' : '50px'} alignItems='center' flexDirection='column' rowGap={0} position='relative'>
        <Box rowGap={0} style={{paddingRight: 0, paddingLeft: 0, maxWidth: '950px'}} >
            <Typography color='#44321e' fontFamily='Anton, sans-serif' align='center' marginBottom='20px'
                        variant={isMobile ? 'h5' : 'h3'}>{translatePhrase(lang, 'VisitingPolicyCaption')}</Typography>
            <Stack paddingBottom='12px' direction='column' rowGap={3} color='#44321e' textAlign='center'>
                <Typography fontSize='18px'>{translatePhrase(lang, 'VisitingPolicyTextFirst')}</Typography>
                <Typography fontSize='18px'>{translatePhrase(lang, 'VisitingPolicyTextSecond')}</Typography>
                <Typography fontSize='18px'>{translatePhrase(lang, "VisitingPolicyTextThird")}</Typography>
            </Stack>
            <Stack rowGap={2} padding='20px' bgcolor='#44321e' direction='column' alignItems='center'>
            {policy.map((policy) => <VisitingPolicyItem {...policy} text={translatePhrase(lang, policy.phrase as Phrase)} circular={true} textColor='#f6efe3' key={policy.icon}/>)}
            </Stack>
            <Stack rowGap={2} padding='20px' bgcolor='#f8ba57' direction='column' alignItems='center'>
                {policyAdditional.map((policy) => <VisitingPolicyItem text={translatePhrase(lang, policy.phrase as Phrase)} {...policy} circular={false}
                                                                      textColor='#44321e' key={policy.icon}/>)}
            </Stack>
            {!isMobile && window.innerWidth > 950 && <Box sx={{
                position: 'absolute',
                right: '10%',
                bottom: 0,
                zIndex: 1,
            }}><CardMedia
                component='img'
                src={tree}
                alt="Tree image"
                style={{
                    width: '300px'
                }}
            />
            </Box>}
        </Box>
    </Box>;
}

