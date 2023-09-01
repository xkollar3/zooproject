import {FC} from "react";
import {Stack} from "@mui/material";
import {CatalogueItem} from "./CatalogueItem";

interface Animal {
    type: string,
    name: string,
    path: string
}

interface CataloguePageProps {
    animals: Animal[],
    page: number,
    pageSize: number
}

export const CataloguePage: FC<CataloguePageProps> = (props: CataloguePageProps) => {
    return <Stack gap={2} flexDirection='row' maxWidth='1000px' flexWrap='wrap' justifyContent='center'>
        {props.animals
            .slice(props.page * props.pageSize, (props.page + 1) * props.pageSize)
            .map((animal, index) => <CatalogueItem key={index} {...animal}/>)}
    </Stack>
}