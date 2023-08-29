import {FC} from "react";
import {Box, Button, Stack, Typography, useMediaQuery} from "@mui/material";
import Banner from "../../assets/banner.jpg"
import {useNavigate} from "react-router-dom";
import {MainPagePost, MainPagePostProps} from "./MainPagePost";
import posts from '../../assets/main_page_posts.json';
import {SocialMediaSection} from "./SocialMediaSection";
import {StatisticsAnimals} from "./StatisticsAnimals";

const getPostByName = (name: string, reverse: boolean): MainPagePostProps => {
    let post: { name: string; caption: string; text: string; imagePath: string } | undefined;
    post = posts.find((param) => param !== undefined && param.name === name);
    if (post === undefined) {
        throw new Error('No post with name: ' + name + ' found');
    }


    return {text: post.text, imagePath: post.imagePath, caption: post.caption, reverse}
}



export const MainSection: FC = () => {
    const navigate = useNavigate();

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
                    Vitajte v parku s najväčším množstvom mačkovitých šeliem v Európe!
                </Typography>
            </Box>
            <StatisticsAnimals/>
            <Stack width='100%' alignItems='center' margin='20px'>
                <MainPagePost {...getPostByName('about', false)}/>
                <MainPagePost {...getPostByName('zoo_description', true)}/>
            </Stack>
            <Button onClick={() => navigate('/animals')} sx={{
                bgcolor: '#f8b957',
                borderRadius: '30px',
                color: 'black',
                display: 'block',
                fontWeight: '700',
                minWidth: '243px',
                padding: '18px 62px',
                textAlign: 'center',
                marginBottom: '20px'
            }}>Prehľad zvierat</Button>
            <SocialMediaSection/>
        </Stack>
    </Box>;
}
