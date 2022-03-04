import { useState } from "react";

function useLazyFetchBooks() {
  const controller = new AbortController();
  const { signal } = controller;

  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function lazyFetchBooks(query) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/volumes?q=${query}`,
        { signal }
      );
      const json = await response.json();
      if (json.totalItems === 0) {
        setIsLoading(false);
        setError("book not found");
      } else {
        setIsLoading(false);
        setFetchedData(json.items);
      }
    } catch {
      throw new Error("Something went wrong while fetching books");
    }
  }

  return {
    fetcher: function (query) {
      return lazyFetchBooks(query);
    },
    state: {
      fetchedData,
      fetchIsLoading: isLoading,
      fetchError: error,
    },
  };
}

export default useLazyFetchBooks;
