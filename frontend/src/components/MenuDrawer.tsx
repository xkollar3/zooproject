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
import {useNavigate} from "react-router-dom";

export default function MenuDrawer() {
    const navigate = useNavigate();

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
                    sx: {width: drawerWidth, height: "100%", color: '#442e1d', bgcolor: '#f6efe3'},
                }}
        >
            <Stack alignItems='center'>
                <List color='#442e1d' sx={{width: '80%'}}>
                    <IconButton onClick={() => setIsDrawerOpen(false)}>
                        <ArrowBack/>
                    </IconButton>
                    <ListItem>
                        <ListItemText>Otváracie hodiny</ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText>Adresa</ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText>O nás</ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText>Zvieratá</ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText>Cenník</ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <div onClick={() => navigate('/visiting-policy')}>
                            <ListItemText>Návštevnícky poriadok</ListItemText>
                        </div>
                    </ListItem>
                    <Divider/>
                </List>
            </Stack>
        </Drawer>
    </>;
}
