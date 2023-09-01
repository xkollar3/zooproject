import {FC} from "react";
import {CardMedia, Stack, Typography} from "@mui/material";
import kangaroo from "../../assets/kangaroo.png";
import cat from "../../assets/cat.png";
import {useRecoilValue} from "recoil";
import {langAtom} from "../../localization/lang";
import {translatePhrase} from "../../localization/translation";

export const StatisticsAnimals: FC = () => {
    const lang = useRecoilValue(langAtom);

    const moreThan = translatePhrase(lang, 'MoreThan');
    const types = translatePhrase(lang, 'Types');
    const units = translatePhrase(lang, 'Units');

    return <Stack direction='row' maxWidth='900px' justifyContent='center' paddingTop='6rem'>
        <Stack margin='10px' height='12rem' width='50%' direction='column' alignItems='center'
               justifyContent='flex-end'>
            <CardMedia style={{height: '100%', objectFit: 'contain'}} component='img' alt='kangaroo silhoutte'
                       src={kangaroo}/>
            <Typography variant='h6'>{moreThan}</Typography>
            <Typography fontWeight='1000' variant='h5'>85</Typography>
            <Typography variant='h6'>{types}</Typography>
        </Stack>
        <Stack margin='10px' height='12rem' width='50%' direction='column' alignItems='center'
               justifyContent='flex-end'>
            <CardMedia style={{height: '100%', objectFit: 'contain'}} component='img' alt='cat silhoutte' src={cat}/>
            <Typography variant='h6'>{moreThan}</Typography>
            <Typography fontWeight='1000' variant='h5'>500</Typography>
            <Typography variant='h6'>{units}</Typography>
        </Stack>
    </Stack>
}