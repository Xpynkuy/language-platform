export type HangulCategory =
  | "consonants"
  | "tense"
  | "vowels_basic"
  | "vowels_compound";

export interface HangulLetter {
  glyph: string;
  name: string;
  nameRu: string;
  romanization: string;
  russian: string;
}

export interface HangulSection {
  label: string;
  items: HangulLetter[];
}

export type HangulData = Record<HangulCategory, HangulSection>;
