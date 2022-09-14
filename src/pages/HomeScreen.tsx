import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import Layout from "layout/Layout";
import Card from "components/Card";
import styled from "styled-components";
import useFetchMovies from "api/news";

const HomeScreen = () => {
  // const dispatch = useAppDispatch();
  // const { entities, loading, error } = useSelector((state: RootState) => {
  //   return state.news;
  // });

  // useEffect(() => {
  //   dispatch(fetchNews()).unwrap();
  //   console.log(entities.results.length);
  // }, []);

  type IntersectHandler = (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver,
  ) => void;

  const useIntersect = (
    onIntersect: IntersectHandler,
    options?: IntersectionObserverInit,
  ) => {
    const ref = useRef<HTMLDivElement>(null);
    const callback = useCallback(
      (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver,
      ) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onIntersect(entry, observer);
        });
      },
      [onIntersect],
    );

    useEffect(() => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(callback, options);
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref, options, callback]);

    return ref;
  };

  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchMovies();
  console.log(data);

  const movies = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.results) : []),
    [data],
  );

  console.log(data);

  const ref = useIntersect(async (entry: any, observer: any) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <Layout>
      <Container>
        {movies.map((movie) => (
          <Card
            id={movie.id}
            title={movie.title}
            backdropxPath={movie.backdrop_path}
            originalTitle={movie.original_title}
            overView={movie.overview}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
          ></Card>
        ))}
        {/* {isFetching && <Loading />} */}
        <Target ref={ref} />
      </Container>
    </Layout>
  );
};

const Target = styled.div`
  height: 1px;
`;

const Container = styled.div``;

export default HomeScreen;
