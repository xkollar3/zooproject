import {FC} from "react";
import {useMediaQuery} from "@mui/material";

export const MapComponent: FC = () => {
    const isMediumSize = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

    return <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10649.38243693817!2d18.586229!3d48.1421419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476ae78b59122d53%3A0x49c5b1eee37c0bb!2sPanthera%20park!5e0!3m2!1sen!2shr!4v1693067830712!5m2!1sen!2shr"
        width={isMediumSize ? "100%" : "60%"} height="400"></iframe>;
}
