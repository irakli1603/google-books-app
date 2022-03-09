import { createContext, useReducer } from "react";
export const FavoritesContext = createContext(null);

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export default function FavoritesProvider({ children }) {
  const [favorites, favoritesDispatch] = useReducer(reducer, []);

  return (
    <FavoritesContext.Provider value={{ favorites, favoritesDispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}
