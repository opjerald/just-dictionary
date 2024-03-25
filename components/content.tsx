"use client";

import Link from "next/link";
// @ts-ignore
import useSound from "use-sound";
import { PlayIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContentProps {
  data: Word[];
}

const Content = ({ data }: ContentProps) => {
  return (
    <div className="space-y-10 pb-10 pt-5">
      {data.map((word, index) => (
        <div key={index} className="space-y-10">
          <Header name={word.word} phonetics={word.phonetics} />
          {word.meanings.map((meaning, index) => (
            <Meaning key={index} meaning={meaning} />
          ))}
        </div>
      ))}
    </div>
  );
};

interface HeaderProps {
  name: string;
  phonetics: Phonetic[];
}
const Header = ({ name, phonetics }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-lora text-5xl font-bold">{name}</h1>
      {!!phonetics.length && (
        <div className="flex items-center gap-2">
          {phonetics.map((phonetic, index) => (
            <Phonetic
              key={index}
              text={phonetic.text}
              audioUrl={phonetic.audio}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface PhoneticProps {
  text?: string;
  audioUrl?: string;
}
const Phonetic = ({ text, audioUrl }: PhoneticProps) => {
  const [play] = useSound(audioUrl);

  if (!audioUrl) {
    return (
      <div className="rounded-xl bg-green-500/20 px-2 py-1.5 transition-transform duration-150 hover:bg-green-500/20">
        <span className="font-inter text-xl text-green-500">{text}</span>
      </div>
    );
  }

  return (
    <Button
      className={cn(
        "rounded-xl bg-green-500/20 px-2 py-1 transition-transform duration-150 hover:bg-green-500/20",
        !text ? "h-10 w-10 rounded-full p-0" : "group rounded-xl",
      )}
      onClick={play}
    >
      {text && (
        <span className="font-inter text-xl text-green-500">{text}</span>
      )}
      <PlayIcon
        className={cn(
          "h-4 w-4 text-green-500",
          !text ? "block" : "ml-2 hidden group-hover:block",
        )}
        fill="#22C55E"
      />
    </Button>
  );
};

interface MeaningProps {
  meaning: Meaning;
}
const Meaning = ({ meaning }: MeaningProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="relative font-inter italic after:absolute after:right-0 after:top-[12px] after:h-[1px] after:w-[90%]  after:bg-muted-foreground/30">
        {meaning.partOfSpeech}
      </h3>
      <p>Meaning</p>
      {meaning.definitions.map((def, index) => (
        <Definition key={index} definition={def} />
      ))}
      {!!meaning.synonyms?.length && (
        <Nyms title="Synonyms" data={meaning.synonyms} />
      )}
      {!!meaning.antonyms?.length && (
        <Nyms title="Antonyms" data={meaning.antonyms} />
      )}
    </div>
  );
};

interface DefinitionProps {
  definition: Definition;
}
const Definition = ({ definition: def }: DefinitionProps) => {
  return (
    <ul className="list-disc">
      <li className="ml-10 [&::marker]:text-sm [&::marker]:text-green-500">
        <p>{def.definition}</p>
        {def.example && (
          <span className="text-muted-foreground/80">
            &quot;{def.example}&quot;
          </span>
        )}
      </li>
    </ul>
  );
};

interface NymsProps {
  title: string;
  data: string[];
}
const Nyms = ({ data, title }: NymsProps) => {
  return (
    <div className="flex gap-2">
      <p>{title}: </p>
      <div className="flex flex-wrap gap-2">
        {data.map((text, index) => (
          <Link
            key={index}
            href={{ pathname: "/", search: `q=${text}` }}
            className="font-bold text-green-500"
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
