import withLayout from "../HOC/withLayout";
import BookCard from "../components/BookCard";
import useBooks from "../hooks/useBooks";

function Favorites() {
  const { bookStore } = useBooks();
  const favorites = bookStore.books.filter((item) => item.isFav);

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
