import { useState, useEffect } from "react";

function useFetchBooks(query = "javascript") {
  const [books, setBooks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(`${process.env.REACT_APP_API_URL}/volumes?q=${query}`, { signal })
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        if (json.totalItems !== 0) {
          setBooks(json.items);
        } else {
          console.log(query);
          setError("book not found");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return {
    isLoading,
    books,
    error,
  };
}

export default useFetchBooks;
