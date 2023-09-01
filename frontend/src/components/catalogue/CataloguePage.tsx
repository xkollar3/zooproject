import {FC} from "react";
import {Stack} from "@mui/material";
import {CatalogueItem} from "./CatalogueItem";
import {useRecoilValue} from "recoil";
import {langAtom} from "../../localization/lang";
import {translatePhrase} from "../../localization/translation";
import {Phrase} from "../../localization/phrases";

interface Animal {
    phrase: string,
    name: string,
    path: string
}

interface CataloguePageProps {
    animals: Animal[],
    page: number,
    pageSize: number
}

export const CataloguePage: FC<CataloguePageProps> = (props: CataloguePageProps) => {
    const lang = useRecoilValue(langAtom);

    return <Stack gap={2} flexDirection='row' maxWidth='1000px' flexWrap='wrap' justifyContent='center'>
        {props.animals
            .slice(props.page * props.pageSize, (props.page + 1) * props.pageSize)
            .map((animal, index) => <CatalogueItem key={index} {...animal} type={translatePhrase(lang, animal.phrase as Phrase)}/>)}
    </Stack>
}