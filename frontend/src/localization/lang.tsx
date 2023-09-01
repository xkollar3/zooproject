import {atom, selector} from "recoil";

export enum Lang {
    SK = 0,
    EN = 1,
    HU = 2
}

export function getNextLanguage(currentLang: Lang): Lang {
    const numberOfLanguages = Object.keys(Lang).length / 2; // Divide by 2 to exclude reverse mappings
    return (currentLang + 1) % numberOfLanguages;
}

export const langAtom = atom<Lang>({
    key: 'language',
    default: Lang.SK
})

export const langName = selector<string>({
    key: 'langName',
    get: ({get}) => {
        const lang = get(langAtom);

        switch (lang) {
            case Lang.EN:
                return 'English'
            case Lang.SK:
                return 'Slovensky'
            case Lang.HU:
                return 'Magyar'
        }
    }
})