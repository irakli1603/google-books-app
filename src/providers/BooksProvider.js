import { createContext, useEffect, useReducer } from "react";
import useFetchBooks from "../hooks/useFetchBooks";
import tweakBookObject from "../utils/tweakBookObject";

export const FavoritesContext = createContext(null);

function reducer(state, action) {
  let changedBooks;

  switch (action.type) {
    case "ADD":
      if (!state.books.some((item) => item.id === action.payload.id)) {
        const favoriteBook = { ...action.payload, isFav: true };
        return { ...state, books: [...state.books, favoriteBook] };
      }
      changedBooks = state.books.map((item) =>
        item.id === action.payload.id ? { ...item, isFav: true } : { ...item }
      );
      return { ...state, books: changedBooks };
    case "REMOVE":
      changedBooks = state.books.map((item) =>
        item.id === action.payload.id ? { ...item, isFav: false } : { ...item }
      );
      return { ...state, books: changedBooks };
    case "INIT":
      return action.payload;
    default:
      return state;
  }
}

function BooksProvider({ children }) {
  const bookObject = {
    books: [],
    isLoading: true,
    error: null,
  };

  const { books, isLoading, error } = useFetchBooks("javascript");
  const [bookStore, booksDispatch] = useReducer(reducer, bookObject);

  useEffect(() => {
    bookObject.books = books;
    bookObject.isLoading = isLoading;
    bookObject.error = error;

    booksDispatch({ type: "INIT", payload: bookObject });
  }, [books, isLoading, error]);

  return (
    <FavoritesContext.Provider value={{ bookStore, booksDispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default BooksProvider;
