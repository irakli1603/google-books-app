import styled from "styled-components";
import arrayToList from "../utils/arrayToList";

const BookContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BookImageContainer = styled.div`
  width: 150px;
  height: 200px;
`;

const BookContent = styled.div`
  display: flex;
  gap: 10px;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.h3`
  margin: 0;
`;

const PublishInfo = styled.div`
  display: flex;
  font-size: 0.876rem;
  color: #777;
  gap: 10px;
`;

const Rating = styled.div``;

function BookMore({ bookData }) {
  console.log(bookData);

  const { volumeInfo } = bookData;

  const {
    authors,
    canonicalVolumeLink,
    ratingsCount,
    averageRating,
    subtitle,
    description,
    imageLinks,
    pageCount,
    publishedDate,
    publisher,
    title,
  } = volumeInfo;

  return (
    <BookContainer>
      <h1>{title}</h1>
      <BookContent>
        <BookImageContainer>
          <a href={canonicalVolumeLink}>
            <img src={imageLinks?.thumbnail} />
          </a>
        </BookImageContainer>
        <BookInfo>
          <div>{arrayToList(authors)}</div>
          <PublishInfo>
            <span>{publisher}</span>
            <span>{publishedDate}</span>
            <span>{pageCount ? `Total Pages ${pageCount}` : ""}</span>
          </PublishInfo>
          <Rating>
            {averageRating && ratingsCount
              ? `Average rating ${averageRating} (${ratingsCount} reviews)`
              : ""}
          </Rating>
          <Subtitle>{subtitle}</Subtitle>
          <p>{description}</p>
        </BookInfo>
      </BookContent>
    </BookContainer>
  );
}

export default BookMore;
