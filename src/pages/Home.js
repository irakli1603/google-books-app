import withLayout from "../HOC/withLayout";
import BookCard from "../components/BookCard";
import useFetchBooks from "../hooks/useFetchBooks";

function Home() {
  const { isLoading, books } = useFetchBooks();

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
