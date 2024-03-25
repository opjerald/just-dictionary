"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

interface SearchProps {
  q: string;
}

const Search = ({ q }: SearchProps) => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    router.push(`/${data.query && `?q=${data.query}`}`);
    router.refresh();
  };
  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <Input
          name="query"
          className="rounded-xl border-transparent bg-[#F4F4F4] py-5 text-lg text-black focus-visible:ring-transparent"
          placeholder="Search"
          defaultValue={q}
        />
      </form>
      <SearchIcon className="absolute right-2.5 top-2.5 h-5 w-5 text-green-500" />
    </div>
  );
};

export default Search;
