import {FC} from "react";
import {Box, Stack, Typography, useMediaQuery} from "@mui/material";
import Banner from "../../assets/banner.jpg"
import {MainPagePost, MainPagePostProps} from "./MainPagePost";
import posts from '../../assets/main_page_posts.json';
import {SocialMediaSection} from "./SocialMediaSection";
import {StatisticsAnimals} from "./StatisticsAnimals";
import {useRecoilValue} from "recoil";
import {Lang, langAtom} from "../../localization/lang";
import {translatePhrase} from "../../localization/translation";
import {Phrase} from "../../localization/phrases";
import {ShortCutButton} from "./ShortcutButton";
import {QueryBuilder} from "@mui/icons-material";
import PetsIcon from '@mui/icons-material/Pets';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PlaceIcon from '@mui/icons-material/Place';
import GavelIcon from '@mui/icons-material/Gavel';

interface PostType {
    name: string
    captionPhrase: string
    contentPhrase: string
    imagePath: string
}

const getPostByName = (name: string, reverse: boolean, lang: Lang): MainPagePostProps => {
    let post: PostType | undefined;

    post = posts.find((param) => param !== undefined && param.name === name);
    if (post === undefined) {
        throw new Error('No post with name: ' + name + ' found');
    }


    return {
        text: translatePhrase(lang, post.contentPhrase as Phrase),
        imagePath: post.imagePath,
        caption: translatePhrase(lang, post.captionPhrase as Phrase),
        reverse
    }
}

export const MainSection: FC = () => {
    const lang = useRecoilValue(langAtom);

    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    return <Box textAlign='center' bgcolor='#f6efe3'>
        <Stack rowGap={1} alignItems='center'>
            <Box sx={{
                width: '100%',
                minHeight: '500px',
                position: 'relative',
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${Banner})`, // Set the Banner image as the background
                backgroundPosition: '50%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                color: 'white', // Set text color to white to improve visibility
                boxSizing: 'border-box',
                border: 0,
                fontSize: '100%',
                font: 'inherit',
                margin: 0,
                padding: 0,
                verticalAlign: 'baseline',
            }} marginTop={isMobile ? "20px" : "0px"}/>
            <Box>
                <Typography fontWeight='1000' variant={isMobile ? 'h5' : 'h4'}>
                    {translatePhrase(lang, 'WelcomeText')}
                </Typography>
            </Box>
            <StatisticsAnimals/>
            <Stack width='100%' alignItems='center' margin='20px'>
                <MainPagePost {...getPostByName('about', false, lang)}/>
                <MainPagePost {...getPostByName('zoo_description', true, lang)}/>
            </Stack>
            <Typography fontWeight='1000' variant={isMobile ? 'h5' : 'h4'}>{translatePhrase(lang, 'Shortcuts')}</Typography>
            <Stack flexDirection={isMobile ? 'column' : 'row'} flexWrap='wrap' columnGap={5} justifyContent='center'
                   marginTop='10px'
                   marginBottom='20px' width='80%' alignItems='center' rowGap={2}>
                <ShortCutButton phrase={"AllAnimalsButton"} icon={PetsIcon} path={'animals'}/>
                <ShortCutButton key='opening-hours' phrase={'MenuOpeningHours'} path={'opening-hours'}
                                icon={QueryBuilder}/>
                <ShortCutButton phrase={'MenuFares'} icon={ConfirmationNumberIcon} path={'fares'}/>
                <ShortCutButton phrase={'MenuContact'} icon={PlaceIcon} path={'contact'}/>
                <ShortCutButton phrase={'MenuVisitingPolicy'} icon={GavelIcon} path={'visiting-policy'}/>
            </Stack>
            <SocialMediaSection/>
        </Stack>
    </Box>;
}
