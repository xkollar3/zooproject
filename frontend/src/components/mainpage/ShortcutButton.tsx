import React, {FC} from "react";
import {Box, Button, Stack, useMediaQuery} from "@mui/material";
import {Phrase} from "../../localization/phrases";
import {translatePhrase} from "../../localization/translation";
import {useRecoilValue} from "recoil";
import {langAtom} from "../../localization/lang";
import {useNavigate} from "react-router-dom";

export interface ShortcutButtonProps {
    phrase: Phrase,
    icon: React.ElementType,
    path: string
}

export const ShortCutButton: FC<ShortcutButtonProps> = (props: ShortcutButtonProps) => {
    const lang = useRecoilValue(langAtom);
    const navigate = useNavigate();

    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    const width = isMobile ? '98%' : '300px';

    return <Button sx={{
        bgcolor: '#f8b957',
        borderRadius: '30px',
        color: 'black',
        width: width,
        height: '100px',
        fontWeight: '700',
        padding: '30px 62px',
    }} onClick={() => navigate(props.path)}>
        <Stack width='100%' height='100%' direction='row' justifyContent='center' columnGap='25px' alignItems='center'>
            {React.createElement(props.icon)}
            <Box>
                {translatePhrase(lang, props.phrase)}
            </Box>
        </Stack>
    </Button>
}