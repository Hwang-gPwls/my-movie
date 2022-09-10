import React, { useEffect } from "react";
import { Movie } from "features/news/types";
import styled from "styled-components";

const Card = ({
  id,
  title,
  originalTitle,
  overView,
  releaseDate,
  voteAverage,
}: Movie) => {
  return (
    <Container key={id}>
      <div className="title">{title}</div>
      <div>{originalTitle}</div>
      <div>{releaseDate}</div>
      <div>{voteAverage}</div>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  max-width: 25rem;
  min-height: 12.5rem;
  margin: 100px auto;
  border-radius: 25px;
  @include elevation(3);
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: (1.5 * 2);
  text-align: center;

  .title {
    max-width: 160px;
    margin: 0 0 (0.5s / 2);
    color: #d18b49;
    font-size: 24px;
    transition: 0.5s ease;
  }
`;

export default Card;
