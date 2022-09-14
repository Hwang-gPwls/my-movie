import React, { useEffect } from "react";
import { Movie } from "features/news/types";
import styled from "styled-components";

const Card = ({
  id,
  title,
  originalTitle,
  backdropxPath,
  overView,
  releaseDate,
  voteAverage,
  originalLanguage,
  posterPath,
  voteCount,
}: Movie) => {
  return (
    <Container key={id}>
      <Main>
        <div className="movie-img">
          <img
            className="movie-img_backimg"
            src={`https://image.tmdb.org/t/p/w1280${backdropxPath}`}
          />
          <img
            className="movie-img_cover"
            src={`https://image.tmdb.org/t/p/w780${posterPath}`}
          />
          <i className="movie-img_fa-scrap"></i>
        </div>
        <h6 className="title">{title}</h6>
        <h6 className="original-title">{originalTitle}</h6>
        <div className="head1 text-center">
          <p className="head1_head">ReleaseDate</p>
          <p className="head1_head">Lang</p>
          <p className="head1_head">Rating</p>
          <p className="head1_head">VoteCount</p>
        </div>
        <div className="head2 text-center">
          <p className="head2_head">{releaseDate}</p>
          <p className="head2_head">{originalLanguage.toUpperCase()}</p>
          <p className="head2_head">{voteAverage}</p>
          <p className="head2_head">{voteCount}</p>
        </div>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  box-sizing: border-box;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.02);
    transition: all 0.4s;
  }
`;

const Main = styled.div`
  border-radius: 30px;
  overflow: hidden;
  height: 530px;
  width: 93%;
  margin: 30px auto;
  background-color: #fff;
  box-shadow: 0px 20px 100px rgba(0, 0, 0, 0.1);

  .movie-img {
    padding: 10px 10px;
    position: relative;

    &_backimg {
      height: 310px;
      width: 100%;
      border-radius: 30px 30px 10px 30px;
    }

    &_cover {
      position: absolute;
      height: 120px;
      bottom: -62px;
      left: 32px;
      border-radius: 5px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }

    &_fa-scrap {
      position: absolute;
      right: 28px;
      bottom: -7px;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 13px;
      background-color: #dc2c29;
      color: white;
      border-radius: 60px;
    }
  }

  .title {
    text-align: center;
    text-transform: capitalize;
    margin-top: 15px;
    font-size: 1em;
  }

  .original-title {
    text-align: center;
    text-transform: capitalize;
    margin-top: 15px;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.5);
  }

  .head1 {
    text-align: center;
    column-count: 4;
    height: 30px;
    width: 100%;
    margin-top: 4rem;

    &_head {
      color: rgba(0, 0, 0, 0.7);
      font-size: 0.9em;
    }
  }

  .head2 {
    text-align: center;
    column-count: 4;
    height: 30px;
    width: 100%;

    &_head {
      color: rgba(0, 0, 0, 0.7);
      font-size: 0.9em;
      font-weight: 700;
    }
  }
`;

export default Card;
