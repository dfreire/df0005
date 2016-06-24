interface Language {
    id: string,
}

interface Board {
    id: string,
    name: string,
    emails: string[],
}

interface Card {
    id: string,
    boardId: string,
}

interface Translation {
    id: string,
    cardId: string,
    languageId: string,
    text: string,
    notes: string,
}
