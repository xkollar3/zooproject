import {useState} from "react";
import {Divider, Drawer, IconButton, List, Stack, Typography, useMediaQuery,} from "@mui/material";
import {ArrowBack, Menu} from "@mui/icons-material";
import {MenuDrawerItem} from "./MenuDrawerItem";
import {useRecoilValue} from "recoil";
import {langAtom} from "../../../localization/lang";
import {translatePhrase} from "../../../localization/translation";

export default function MenuDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const lang = useRecoilValue(langAtom);
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    const drawerWidth = isMobile ? "100%" : "20%";

    return <>
        <IconButton onClick={() => setIsDrawerOpen(true)}>
            <Typography padding='10' variant='h6' color='text.primary'>{translatePhrase(lang, 'MenuName')}</Typography>
            <Menu style={{color: 'black'}}/>
        </IconButton>
        <Drawer anchor='right'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                PaperProps={{
                    sx: {width: drawerWidth, height: "100%", color: '#442e1d', bgcolor: '#f6efe3'},
                }}
        >
            <Stack alignItems='center'>
                <List color='#442e1d' sx={{width: '80%'}}>
                    <IconButton onClick={() => setIsDrawerOpen(false)}>
                        <ArrowBack/>
                    </IconButton>
                    <MenuDrawerItem name={translatePhrase(lang, 'MenuOpeningHours')} location={'/opening-hours'} key={'openingHours'} setIsDrawerOpen={setIsDrawerOpen}/>
                    <Divider/>
                    <MenuDrawerItem name={translatePhrase(lang, 'MenuContact')} location={'/contact'} key={'contact'} setIsDrawerOpen={setIsDrawerOpen}/>
                    <Divider/>
                    <MenuDrawerItem name={translatePhrase(lang, 'MenuAnimals')} location={'/animals'} key={'animals'} setIsDrawerOpen={setIsDrawerOpen}/>
                    <Divider/>
                    <MenuDrawerItem name={translatePhrase(lang, 'MenuFares')} location={'/fares'} key={'fares'} setIsDrawerOpen={setIsDrawerOpen}/>
                    <Divider/>
                    <MenuDrawerItem name={translatePhrase(lang, 'MenuVisitingPolicy')} location={'/visiting-policy'} key={'visitingPolicy'} setIsDrawerOpen={setIsDrawerOpen}/>
                    <Divider/>
                </List>
            </Stack>
        </Drawer>
    </>
        ;
}
