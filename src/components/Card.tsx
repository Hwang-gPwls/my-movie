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
}: Movie) => {
  return (
    <Container key={id}>
      <div className="row px-xl-5 px lg-0">
        <div className="col-md-4">
          <Main>
            <div className="movie-img">
              <img
                className="movie-img_backimg"
                src={`https://image.tmdb.org/t/p/w500${backdropxPath}`}
              />
              <img
                className="movie-img_cover"
                src={`https://image.tmdb.org/t/p/w500${backdropxPath}`}
              />
              <i className="fa fa-scrap"></i>
            </div>
            <h6>{title}</h6>
            <div className="head1 text-center">
              <p>Length</p>
              <p>Lang</p>
              <p>Rating</p>
              <p>Review</p>
            </div>
            <div className="head2 text-center">
              <p>01:37</p>
              <p>Eng</p>
              <p>{voteAverage}</p>
              <p>10</p>
            </div>
          </Main>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
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
  }
`;

export default Card;
