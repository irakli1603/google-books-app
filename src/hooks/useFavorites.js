import { useContext } from "react";
import { FavoritesContext } from "../providers/FavoritesProvider";

function useFavorites() {
  return useContext(FavoritesContext);
}

export default useFavorites;
