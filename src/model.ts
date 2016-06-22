interface Language {
    id: string,
}

interface TranslationSheet {
    id: string,
    name: string,
}

interface TranslationItem {
    id: string,
    sheetId: string,
}

interface TranslationAtom {
    id: string,
    itemId: string,
    languageId: string,
    text: string,
    context: string,
}
