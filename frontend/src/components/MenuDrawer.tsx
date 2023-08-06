import {useState} from "react";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import {ArrowBack, Menu} from "@mui/icons-material";

export default function MenuDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    const drawerWidth = isMobile ? "100%" : "20%";

    return <>
        <IconButton onClick={() => setIsDrawerOpen(true)}>
            <Typography padding='10' variant='h6' color='text.primary'>Menu</Typography>
            <Menu style={{color: 'black'}}/>
        </IconButton>
        <Drawer anchor='right'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                PaperProps={{
                    sx: {width: drawerWidth, height: "100%", color: 'text.secondary'},
                }}
        >
            <Stack alignItems='center'>
                <List sx={{width: '80%'}}>
                    <IconButton onClick={() => setIsDrawerOpen(false)}>
                        <ArrowBack color='primary'/>
                    </IconButton>
                    <ListItem>
                        <ListItemText>Otváracie hodiny</ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText>Adresa</ListItemText>
                    </ListItem>
                    <Divider/>
                </List>
            </Stack>
        </Drawer>
    </>;
}
