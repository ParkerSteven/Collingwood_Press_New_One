
const decodeHtmlEntity = (
    entity: string,
    hexCode?: string,
    decimalCode?: string
): string => {
    if (hexCode) {
        const codePoint = Number.parseInt(hexCode, 16);
        return Number.isNaN(codePoint)
            ? entity
            : String.fromCodePoint(codePoint);
    }

    if (decimalCode) {
        const codePoint = Number.parseInt(decimalCode, 10);
        return Number.isNaN(codePoint)
            ? entity
            : String.fromCodePoint(codePoint);
    }

    return NAMED_HTML_ENTITIES[entity] ?? entity;
};

const NAMED_HTML_ENTITIES: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&nbsp;': '\u00A0',
};


export const decodeHTMLEntities = (text = '') => {
    if (typeof text !== 'string') {
        return text ?? '';
    }

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = text;
        return textarea.value;
    }

    return text.replace(/&#x([0-9a-fA-F]+);|&#([0-9]+);|&[a-zA-Z]+;/g, decodeHtmlEntity);
};