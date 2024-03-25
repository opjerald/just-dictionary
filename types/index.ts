type Word = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
  license?: License
  sourceUrls?: string[] 
};

type License = {
  name: string;
  url: string;
}

type Phonetic = {
  text?: string,
  audio?: string;
  sourceUrl?: string;
  license?: License
}

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[]
  synonyms?: string[];
  antonyms?: string[];
}

type Definition = {
  definition: string;
  example: string;
  synonyms: string[],
  antonyms: string[]
}

type NoDefinition = {
  title: string;
  message: string;
  resolution: string;
}

type SearchResponse = {
  data: Word[];
  q?: string;
  error?: NoDefinition;
}