import {CardMedia, Dialog, DialogContent, Slide} from "@mui/material";
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
    const getPath = (badPath: string) => {
        return badPath.slice(0, badPath.length - 4) + "_detail.jpg";
    }

    return <Dialog scroll='body' fullWidth={true} TransitionComponent={Transition} open={props.isOpen} onClose={props.onClose} maxWidth="md">
        <DialogContent sx={{"padding": '10px', 'margin': '0px'}}>
            <CardMedia
                component="img"
                src={"animals/" + getPath(props.imgPath)}
                alt={props.animal}
                style={{ width: "100%" }}
            />
        </DialogContent>
    </Dialog>
};