import {Phrase, PhraseAndText} from "./phrases";
import {Lang} from "./lang";
import {slovakPhraseAndText} from "./sk";
import {englishPhraseAndText} from "./en";
import {hungarianPhraseAndText} from "./hu";

export const Translation: Record<Lang, PhraseAndText> = {
    [Lang.SK]: slovakPhraseAndText,
    [Lang.EN]: englishPhraseAndText,
    [Lang.HU]: hungarianPhraseAndText
};

export const translatePhrase = (
    lang: Lang,
    phrase: Phrase,
) => {
    if (phrase === null) {
        return '';
    }

    if (!(lang in Translation)) {
        return 'Unknown language';
    }

    if (!(phrase in Translation[lang])) {
        return 'Unknown phrase';
    }

    return Translation[lang][phrase];
};

