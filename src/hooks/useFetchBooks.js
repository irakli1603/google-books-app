import { useState, useEffect } from "react";

function useFetchBooks(query = "javascript") {
  const [books, setBooks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchBooks() {
      try {
        setIsLoading(true);

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/volumes?q=${query}`,
          { signal }
        );
        const json = await response.json();

        setIsLoading(false);

        if (json.totalItems === 0) {
          setError("book not found");
        } else {
          setBooks(json.items);
        }
      } catch {
        setIsLoading(false);
        throw new Error("Something went wrong while fetching books");
      }
    }

    fetchBooks();

    return () => {
      controller.abort();
    };
  }, [query]);

  return {
    isLoading,
    books,
    error,
  };
}

export default useFetchBooks;
