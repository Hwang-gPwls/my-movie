import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import Layout from "layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/store";
import { useAppDispatch } from "features/news/newsHooks";
import NewsList from "components/NewsList";
import styled from "styled-components";
import useFetchNews from "api/news";
//import useIntersect from "hooks/IntersectionObserver";

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

  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchNews();

  const news = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.results) : []),
    [data],
  );

  const ref = useIntersect(async (entry: any, observer: any) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  console.log(data);

  return (
    <Layout>
      <Container>
        {news.map((news) => (
          <div key={news.title}>{news.title}</div>
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
