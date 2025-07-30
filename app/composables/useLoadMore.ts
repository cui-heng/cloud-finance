interface LoadMoreState<T> {
  data: Website.Article[];
  total: number;
  loading: boolean;
  params: {
    page: number;
    size: number;
  };
}

export function useLoadMore<T = Website.Article>(url: string, defaultParams?: any) {
  const { $request } = useNuxtApp();

  const state = useState<LoadMoreState<T>>(`load-more-state:${defaultParams?.newsType || 'home'}`, () => ({
    data: [],
    total: 0,
    loading: false,
    params: {
      page: 1,
      size: 10,
      ...defaultParams,
    },
  }));

  useAsyncData(`${url}:${defaultParams?.newsType || 'home'}`, async () => {
    const { page = 1, size = 10 } = defaultParams || {};
    state.value.loading = true;
    state.value.params = {
      page,
      size,
      ...defaultParams,
    }
    const result = await $request<Website.FetchListResponse<Website.Article>>(url, {
      params: {
        ...state.value.params,
        page: 1,
        size: page * size,
      },
    }).finally(() => {
      state.value.loading = false;
    });
    state.value.data = result.list || [];
    state.value.total = result.total || 0;
    return result;
  });


  onMounted(() => {
    const scrollEl = document.documentElement;
    const scrollFinalThreshold = scrollEl.scrollHeight * 0.9;
    window.addEventListener('scroll', () => {
      const isOverThreshold = scrollEl.scrollTop + scrollEl.clientHeight >= scrollFinalThreshold;
      const canLoadMore = state.value.data.length < state.value.total && !state.value.loading;

      if (isOverThreshold && canLoadMore) {
        state.value.params.page += 1;
        state.value.loading = true;
        $request<Website.FetchListResponse<Website.Article>>(url, {
          params: state.value.params,
        }).then(result => {
          state.value.data?.push(...(result.list || []));
        }).finally(() => {
          state.value.loading = false;
        });
      }
    });
  });

  return state;
};