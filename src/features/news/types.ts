export type MovieId = number;

export interface Movie {
  id: MovieId;
  title: string;
  originalTitle: string;
  backdropxPath: string;
  overView: string;
  releaseDate: string;
  voteAverage: string;
  originalLanguage: string;
  posterPath: string;
  voteCount: string;
}
