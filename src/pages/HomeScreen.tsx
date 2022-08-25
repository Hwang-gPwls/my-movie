import { useEffect, useState } from "react";
import Layout from "layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "features/news/newsSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { entities, loading, error } = useSelector((state) => state.news);

  return (
    <Layout>
      <h1>To do</h1>
      <form>
        <h1>Fetch user data</h1>
        <button onClick={() => dispatch(fetchNews()).unwrap()}>
          Get users
        </button>
        {entities?.length > 0 &&
          entities.map((user) => <div key={user.id}>{user.name}</div>)}
      </form>
      <ul></ul>
    </Layout>
  );
};

export default HomeScreen;
