import withLayout from "../HOC/withLayout";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import useFetchBooks from "../hooks/useFetchBooks";


function BookSearch() {
  const { query } = useParams();
  const { isLoading, books, error } = useFetchBooks(query);

  return (
    <div>
      <div>
        Showing results for query: <b>{query}</b>
      </div>
      {isLoading ? "loading..." : ""}
      {error ? error : ""}
      {books
        ? books.map((item) => <BookCard key={item.id} bookData={item} />)
        : ""}
    </div>
  );
}

export default withLayout(BookSearch);
