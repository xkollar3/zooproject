import {Dispatch, FC, useState} from "react";
import {ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface MenuDrawerItemProps {
    name: string,
    location: string,
    key: string,
    setIsDrawerOpen: Dispatch<boolean>,
}

export const MenuDrawerItem: FC<MenuDrawerItemProps> = (props: MenuDrawerItemProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const listItemStyle = {
        transition: 'background-color 0.3s ease',
        backgroundColor: isHovered ? '#f8ba57' : 'transparent',
    };

    const handleClick = () => {
        navigate(props.location);
        props.setIsDrawerOpen(false);
    }


    return <ListItemButton key={props.key}
                           style={listItemStyle}
                           onMouseEnter={() => setIsHovered(true)}
                           onMouseLeave={() => setIsHovered(false)}
                           onClick={handleClick}>
        <ListItemText>{props.name}</ListItemText>
    </ListItemButton>
}