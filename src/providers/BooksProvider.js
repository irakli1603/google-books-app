import { createContext, useEffect, useReducer } from "react";
import useFetchBooks from "../hooks/useFetchBooks";

export const FavoritesContext = createContext(null);

function tweakBookObject(object) {
  const result = {};

  result["id"] = object.id;
  result["isFav"] = false;
  result["searchInfo"] = object.searchInfo;
  result["volumeInfo"] = object.volumeInfo;

  return result;
}

function reducer(state, action) {
  let changedBooks;

  switch (action.type) {
    case "ADD":
      changedBooks = state.books.map((item) =>
        item.id === action.payload ? { ...item, isFav: true } : { ...item }
      );
      return { ...state, books: changedBooks };
    case "REMOVE":
      changedBooks = state.books.map((item) =>
        item.id === action.payload ? { ...item, isFav: false } : { ...item }
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
    if (books && books.length !== 0) {
      const tweakedBooks = books.map((item) => tweakBookObject(item));
      bookObject.books = tweakedBooks;
    }

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
