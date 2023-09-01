import {FC} from "react";
import {Stack, Typography} from "@mui/material";
import {useRecoilValue} from "recoil";
import {langAtom} from "../../localization/lang";
import {translatePhrase} from "../../localization/translation";
import {Phrase} from "../../localization/phrases";

interface FareItemProps {
    fareType: string,
    fareNote: string | null,
    price: string | null,
    textColor: string,
}

export const FareItem: FC<FareItemProps> = (props: FareItemProps) => {
    const lang = useRecoilValue(langAtom);

    return <Stack flexDirection='row' justifyContent='space-between' width='100%'>
        <Stack flexDirection='column'>
            <Typography fontFamily='Bebas Neue, sans-serif' color={props.textColor} variant='h5'>{translatePhrase(lang, props.fareType as Phrase)}</Typography>
            <Typography fontFamily='Bebas Neue, sans-serif' color={props.textColor}
                        fontSize='15px'>{translatePhrase(lang, props.fareNote as Phrase)}</Typography>
        </Stack>
        <Typography fontFamily='Bebas Neue, sans-serif' variant='h5'>{props.price === null ? translatePhrase(lang, 'NoPrice') : props.price}</Typography>
    </Stack>
}