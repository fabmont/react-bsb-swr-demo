import useSWR from 'swr';

import api from '../services/api';

async function fetcher(endpoint) {
  const { data } = await api.get(endpoint);

  return data;
}

export default function useFetch(endpoint, method, params) {
  const { data, error, isValidating, revalidate } = useSWR(
    endpoint,
    (url) => fetcher(url),
    params
  );

  return {
    data,
    error,
    isValidating,
    revalidate,
  };
}
