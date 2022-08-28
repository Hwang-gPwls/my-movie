import { useEffect, useState } from "react";
import Layout from "layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "features/news/newsSlice";
import { RootState } from "app/store";
import { useAppDispatch } from "features/news/newsHooks";
import NewsList from "components/NewsList";
import styled from "styled-components";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { entities, loading, error } = useSelector((state: RootState) => {
    return state.news;
  });

  useEffect(() => {
    dispatch(fetchNews()).unwrap();
    console.log(entities.results.length);
  }, []);

  return (
    <Layout>
      <Container>
        {entities &&
          entities.results.map((result) => (
            <NewsList
              slug_name={result.slug_name}
              title={result.title}
              byline={result.byline}
              source={result.source}
              publishedDate={result.publishedDate}
              geoFacet={result.geoFacet}
            />
          ))}
      </Container>
    </Layout>
  );
};

const Container = styled.div``;

export default HomeScreen;
