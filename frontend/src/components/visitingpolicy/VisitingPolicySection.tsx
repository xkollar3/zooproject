import {FC} from "react";
import {Box, Stack, Typography, useMediaQuery} from "@mui/material";
import policy from "../../assets/visiting_policy.json";
import policyAdditional from "../../assets/visiting_policy_additions.json";
import {VisitingPolicyItem} from "./VisitingPolicyItem";

export const VisitingPolicySection: FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return <Box display='flex' bgcolor='#f6efe3' padding={isMobile ? '0px' : '50px'} alignItems='center'
            paddingTop={isMobile ? '100px' : '50px'} flexDirection='column' rowGap={2}>
        <Stack padding='20px' bgcolor='#44321e' direction='column' maxWidth='900px' width='100%'>
            <Typography color='#f6efe3' fontWeight='1000' align='center' marginBottom='20px' variant={isMobile ? 'h5' : 'h3'}>Základné bezpečnostné pokyny</Typography>
            <Stack direction='column' alignItems='center' rowGap={2}>
                {policy.map((policy) => <VisitingPolicyItem {...policy} circular={true} textColor='#f6efe3'/>)}
            </Stack>
        </Stack>
        <Stack padding='20px' bgcolor='#f8ba57' direction='column' alignItems='center' rowGap={2} maxWidth='900px' width='100%'>
            {policyAdditional.map((policy) => <VisitingPolicyItem {...policy} circular={false} textColor='#44321e'/>)}
        </Stack>
    </Box>;
}

