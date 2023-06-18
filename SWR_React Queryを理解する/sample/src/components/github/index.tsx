import { fetcher } from "../../fetcher";
import useSWR from "swr";

interface RepoData {
  name: string;
  description: string;
  subscribers_count: number;
  stargazers_count: number;
  forks_count: number;
}

export const Example = () => {
  const { data, error, isLoading } = useSWR<RepoData, Error>(
    "https://api.github.com/repos/tannerlinsley/react-query",
    fetcher
  );

  if (isLoading) return <p>downloading...</p>;

  if (error) return <p>error.message</p>;

  if (!data) return <p>no contents</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};
