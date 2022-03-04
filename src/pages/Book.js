import { useParams } from "react-router-dom";
import withLayout from "../HOC/withLayout";
import useBooks from "../hooks/useBooks";
import BookMore from "../components/BookMore";
import useLazyFetchBooks from "../hooks/useLazyFetchBooks";
import { useEffect, useState } from "react";

function Books() {
  const [currentBook, setCurrentBook] = useState({
    book: null,
    isLoading: true,
    error: null,
  });

  const { id } = useParams();

  const { bookStore } = useBooks();

  const { fetcher, state } = useLazyFetchBooks();

  useEffect(() => {
    let bookInBookStore = bookStore.books.filter(
      (item) => item.volumeInfo.industryIdentifiers[0].identifier === id
    );
    let inBookStore = bookInBookStore.length > 0;

    if (inBookStore) {
      setCurrentBook({
        book: bookInBookStore,
        isLoading: bookStore.isLoading,
        error: bookStore.error,
      });
    } else {
      setCurrentBook({ book: null, isLoading: true, error: null });
      fetcher(`ISBN:${id}`);
    }
  }, [id]);

  useEffect(() => {
    if (state.fetchedData || state.fetchError) {
      setCurrentBook({
        book: state.fetchedData,
        isLoading: state.isLoading,
        error: state.fetchError,
      });
    }
  }, [state.isLoading, state.fetchError, state.fetchedData]);

  return (
    <div>
      {currentBook.isLoading ? <div>loading...</div> : ""}
      {currentBook.error ? <div>{currentBook.error}</div> : ""}
      {currentBook.book ? <BookMore bookData={currentBook.book[0]} /> : ""}
    </div>
  );
}

export default withLayout(Books);
