import useSWR from 'swr';

const fetcher = async (pubkey: string) => fetch(`https://rbr.bio/${pubkey}/metadata.json`).then((r) => r.json());

export const useProfile = (pubkey: string) => {
  const { data, error, isLoading }: any = useSWR(pubkey, fetcher);

  return {
    user: data ? (data.content ? JSON.parse(data.content) : null) : null,
    isLoading,
    isError: error,
  };
};
