import styled from "styled-components";
import { Link } from "react-router-dom";
import arrayToList from "../utils/arrayToList";
import useBooks from "../hooks/useBooks";

const CardLayout = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
`;

const CardImage = styled.img`
  background-color: blue;
  max-width: 150px;
  max-height: 150px;
  margin-right: 10px;
  user-select: none;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h4`
  font-size: 1.5rem;
  margin: 0;
`;

const Subtitle = styled.h5`
  font-size: 1.2rem;
  font-weight: normal;
  margin: 3px 0;
`;

const Description = styled.p`
  font-size: 1rem;
  overflow: hidden;
  max-height: 70px;
  width: 100%;
  margin: 0;
`;

const ColumnBlock = styled.div`
  display: flex;

  & > * {
    flex-grow: 1;
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
  }
`;

const Button = styled.a`
  text-decoration: underline;
  color: blue;
  cursor: pointer;
`;

function BookCard({ bookData }) {
  const { id, searchInfo, volumeInfo, isFav } = bookData;

  const {
    title,
    subtitle,
    imageLinks,
    publishedDate,
    authors,
    industryIdentifiers,
  } = volumeInfo;

  const { booksDispatch } = useBooks();

  const bookId = industryIdentifiers[0].identifier;
  const isFavorite = isFav;

  return (
    <CardLayout>
      <CardImage src={imageLinks.smallThumbnail} />
      <CardInfo>
        <Title>
          <cite>{title}</cite>
        </Title>
        <ColumnBlock>
          <Subtitle>{subtitle}</Subtitle>
          <div>{publishedDate}</div>
        </ColumnBlock>
        <Description>
          {searchInfo?.textSnippet ? (
            searchInfo.textSnippet
          ) : (
            <i> - no description</i>
          )}
        </Description>
        <ColumnBlock>
          <div>
            <strong>By:</strong> {arrayToList(authors)}
          </div>
          <div>
            <Button
              onClick={() =>
                booksDispatch(
                  isFavorite
                    ? { type: "REMOVE", payload: id }
                    : { type: "ADD", payload: id }
                )
              }
            >
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </Button>
            <Link to={`/book/${bookId}`} component={<Button />}>
              Read More
            </Link>
          </div>
        </ColumnBlock>
      </CardInfo>
    </CardLayout>
  );
}

export default BookCard;
