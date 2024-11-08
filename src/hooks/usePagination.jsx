import useSWRInfinite from "swr/infinite";

const usePagination = (service, id = null) => {
  const PAGE_SIZE = 4;

  const getKey = (pageIndex, previousPageData) => {
    pageIndex = pageIndex + 1;

    if (previousPageData && !previousPageData.length) return null;

    if (id) return `?page=${pageIndex}&per_page=${PAGE_SIZE}&id=${id}`;

    return `?page=${pageIndex}&per_page=${PAGE_SIZE}`;
  };

  const { data, size, setSize, error, mutate } = useSWRInfinite(
    getKey,
    service
  );

  const paginatedData = data?.flat();

  const isReachedEnd = data && data[data.length - 1]?.length < PAGE_SIZE;

  return { paginatedData, isReachedEnd, size, setSize, error, mutate };
};

export default usePagination;
