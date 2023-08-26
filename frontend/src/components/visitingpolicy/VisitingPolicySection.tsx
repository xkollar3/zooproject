import {FC} from "react";
import {Box, CardMedia, Stack, Typography, useMediaQuery} from "@mui/material";
import policy from "../../assets/visiting_policy.json";
import policyAdditional from "../../assets/visiting_policy_additions.json";
import {VisitingPolicyItem} from "./VisitingPolicyItem";
import tree from '../../assets/tree.png';

export const VisitingPolicySection: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return <Box display='flex' bgcolor='#f6efe3' padding={isMobile ? '0px' : '50px'} alignItems='center'
                paddingTop={isMobile ? '100px' : '50px'} flexDirection='column' rowGap={0} position='relative'>
        <Box rowGap={0} style={{paddingRight: 0, paddingLeft: 0, maxWidth: '950px'}} >
            <Typography color='#44321e' fontFamily='Anton, sans-serif' align='center' marginBottom='20px'
                        variant={isMobile ? 'h5' : 'h3'}>Základné bezpečnostné pokyny</Typography>
            <Stack paddingBottom='12px' direction='column' rowGap={3} color='#44321e' textAlign='center'>
                <Typography fontSize='18px'>V Parku sa tiež uplatňujú bezpečnostné opatrenia, aby sa zabezpečilo, že
                    zvieratá a návštevníci sú v bezpečí. Existujú ohrady, zábrany a dozor zo strany kvalifikovaného
                    personálu. Vďaka bezpečnostným opatreniam v Parku sa minimalizuje riziko kontaktu medzi zvieratami a
                    návštevníkmi. Je tiež dôležité dodržiavať pokyny a pravidlá, aby sme zabezpečili bezpečné a zdravé
                    prostredie pre všetkých.
                </Typography>
                <Typography fontSize='18px'>
                    Držte sa vyznačených chodníkov, nevkladajte ruky ani mobilné zariadenia do výbehov zvierat a
                    rešpektujte vzdialenosť od nich. Tiež je dôležité nekŕmiť zvieratá ( pokial to nie je povolené
                    vyhradeným jedlom), pretože ich strava je starostlivo kontrolovaná.
                </Typography>
                <Typography fontSize='18px'>
                    Ak máte nejaké ďalšie otázky týkajúce sa bezpečnosti, neváhajte sa opýtať personálu parku. Dúfame, že
                    si užijete svoju návštevu!
                </Typography>
            </Stack>
            <Stack rowGap={2} padding='20px' bgcolor='#44321e' direction='column' alignItems='center'>
            {policy.map((policy) => <VisitingPolicyItem {...policy} circular={true} textColor='#f6efe3'/>)}
            </Stack>
            <Stack rowGap={2} padding='20px' bgcolor='#f8ba57' direction='column' alignItems='center'>
                {policyAdditional.map((policy) => <VisitingPolicyItem {...policy} circular={false}
                                                                      textColor='#44321e'/>)}
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

