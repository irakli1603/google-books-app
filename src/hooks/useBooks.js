import { useContext } from "react";
import { FavoritesContext } from "../providers/BooksProvider";

function useFavorites() {
  return useContext(FavoritesContext);
}

export default useFavorites;
