interface Language {
    id: string,
}

interface TranslationSheet {
    id: string,
    name: string,
    emails: string[],
}

interface TranslationCard {
    id: string,
    sheetId: string,
}

interface TranslationAtom {
    id: string,
    cardId: string,
    languageId: string,
    text: string,
    context: string,
}
