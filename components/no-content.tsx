import Image from "next/image";

interface NoContentProps {
  error: NoDefinition;
}

const NoContent = ({ error }: NoContentProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      {error.title === "No Definitions Found" && (
        <Image
          src="/svg/no-found.svg"
          alt="No Found"
          height={400}
          width={400}
        />
      )}
      <h1 className="font-inter text-2xl font-bold">{error.title}</h1>
    </div>
  );
};

export default NoContent;
