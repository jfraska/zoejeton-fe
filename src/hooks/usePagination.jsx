"use client";

import useSWRInfinite from "swr/infinite";

const usePagination = (service, id = null, PAGE_SIZE = 4) => {
  const getKey = (pageIndex, previousPageData) => {
    pageIndex = pageIndex + 1;

    if (previousPageData?.data && !previousPageData.data?.length) return null;

    if (id) return `?page=${pageIndex}&per_page=${PAGE_SIZE}&id=${id}`;

    return `?page=${pageIndex}&per_page=${PAGE_SIZE}`;
  };

  const { data, size, setSize, error, mutate } = useSWRInfinite(
    getKey,
    service
  );

  const paginatedData = data ? data.flatMap((page) => page.data || []) : [];

  const isReachedEnd =
    data?.[data.length - 1]?.data &&
    data[data.length - 1].data.length < PAGE_SIZE;

  return { paginatedData, isReachedEnd, size, setSize, error, mutate };
};

export default usePagination;
