import { useEffect, useState } from "react";
import Layout from "layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "features/news/newsSlice";
import { RootState } from "app/store";
import { useAppDispatch } from "features/news/newsHooks";
import NewsList from "components/NewsList";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { entities, loading, error } = useSelector((state: RootState) => {
    return state.news;
  });

  useEffect(() => {
    dispatch(fetchNews()).unwrap();
    console.log(entities.results[0].slug_Name);
  }, []);

  return (
    <Layout>
      <h1>To do</h1>
      <h1>Fetch user data</h1>
      {entities && (
        <NewsList
          slug_Name={entities.results[0].slug_Name}
          title={entities.results[0].title}
          byline={entities.results[0].byline}
          source={entities.results[0].source}
          publishedDate={entities.results[0].publishedDate}
          geoFacet={entities.results[0].geoFacet}
        />
      )}
      <ul></ul>
    </Layout>
  );
};

export default HomeScreen;
