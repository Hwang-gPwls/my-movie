export type MovieId = number;

export interface Movie {
  id: MovieId;
  title: string;
  originalTitle: string;
  overView: string;
  releaseDate: string;
  voteAverage: string;
}
