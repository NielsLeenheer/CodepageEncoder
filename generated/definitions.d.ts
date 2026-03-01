interface CodepageDefinition {
    name: string;
    languages?: string[];
    extends?: string;
    offset?: number;
    value: number[] | (number | undefined)[][];
    codepoints?: number[];
}

declare const definitions: Record<string, CodepageDefinition>;
export default definitions;
