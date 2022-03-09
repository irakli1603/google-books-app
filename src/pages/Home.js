import withLayout from "../HOC/withLayout";
import BookCard from "../components/BookCard";
import useBooks from "../hooks/useBooks";

function Home() {
  const { bookStore } = useBooks();
  const { isLoading, books } = bookStore;

  return (
    <div>
      {isLoading ? <div>loading...</div> : ""}
      {books
        ? books.map((item) => <BookCard key={item.id} bookData={item} />)
        : ""}
    </div>
  );
}

export default withLayout(Home);
