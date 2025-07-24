import type { UseFetchOptions } from "#app";

export function useRequest<T>(url: string, options?: UseFetchOptions<T>) {
  const { $request } = useNuxtApp();

  return useFetch(url, {
    $fetch: $request as any,
    ...options,
  });
};