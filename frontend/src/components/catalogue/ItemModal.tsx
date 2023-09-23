import {CardMedia, Dialog, DialogContent, Slide, useMediaQuery} from "@mui/material";
import {TransitionProps} from "@mui/material/transitions";
import React from "react";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface ItemModalProps {
    isOpen: boolean,
    onClose: any,
    animal: string,
    imgPath: string
}

export const ItemModal = (props: ItemModalProps) => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm")
        || theme.breakpoints.down("xs"));

    const getPath = (badPath: string) => {
        return badPath.slice(0, badPath.length - 4) + "_detail.jpg";
    }

    const contentPadding = isMobile ? '10px 0' : '10px';

    return <Dialog sx={{
        '.MuiDialog-paper': {
            'margin': '0',
            'width' : '100%'
        }
    }} scroll={isMobile ? 'paper' : 'body'}
                   fullWidth={true} TransitionComponent={Transition}
                   open={props.isOpen} onClose={props.onClose} maxWidth={isMobile ? 'sm' : 'md'}>
        <DialogContent sx={{"padding": contentPadding, 'margin': '0'}}>
            <CardMedia
                component="img"
                src={"animals/" + getPath(props.imgPath)}
                alt={props.animal}
                style={{width: "100%"}}
            />
        </DialogContent>
    </Dialog>
};