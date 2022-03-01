import { useParams } from "react-router-dom";
import withLayout from "../HOC/withLayout";
import useFetchBooks from "../hooks/useFetchBooks";
import BookMore from "../components/BookMore";

function Books() {
  const { id } = useParams();
  const { isLoading, books, error } = useFetchBooks(`ISBN:${id}`);

  return (
    <div>
      {isLoading ? <div>loading...</div> : ""}
      {error ? <div>{error}</div> : ""}
      {books ? <BookMore bookData={books[0]} /> : ""}
    </div>
  );
}

export default withLayout(Books);
