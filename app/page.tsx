import Container from "@/components/container";
import Content from "@/components/content";
import Navbar from "@/components/navbar";
import NoContent from "@/components/no-content";
import Search from "@/components/search";

export const revalidate = 0;

interface HomePageProps {
  searchParams: {
    q: string;
  };
}

const HomePage = async ({ searchParams: { q } }: HomePageProps) => {
  const getWord = async (): Promise<SearchResponse> => {
    if (!q)
      return {
        data: [],
        error: {
          title: "Welcome to Just Dictionary",
          message: "Search definition and meaning by simpler means",
          resolution: "",
        },
      };

    const res = await fetch(`${process.env.API_URL}/${q}`, {
      method: "GET",
    });

    if (!res.ok) {
      return {
        data: [],
        error: await res.json(),
      };
    }

    const data = await res.json();

    return {
      q,
      data,
    };
  };

  const response = await getWord();

  return (
    <Container>
      <div className="flex h-full flex-col space-y-4 px-5 md:px-0">
        <Navbar />
        <Search q={response.q || ""} />
        {!!response.data.length && <Content data={response.data} />}
        {response.error && <NoContent error={response.error} />}
      </div>
    </Container>
  );
};

export default HomePage;
