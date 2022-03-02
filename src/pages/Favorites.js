import withLayout from "../HOC/withLayout";
import useFavorites from "../hooks/useFavorites";
import BookCard from "../components/BookCard";

function Favorites() {
  const { favorites } = useFavorites();

  const isFavorites = favorites.length === 0;

  return (
    <>
      <h3>Your favorite books</h3>
      {isFavorites ? (
        <div>You don't have favorite books</div>
      ) : (
        <div>
          {favorites
            ? favorites.map((item) => (
                <BookCard key={item.id} bookData={item} />
              ))
            : "not found"}
        </div>
      )}
    </>
  );
}

export default withLayout(Favorites);
