import { Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestData } from "./modules/news";
import { RootState } from "./modules/index";

const Routes = () => {
  return useRoutes(routes);
};

const App = () => {
  const dispatch = useDispatch();
  const sagaData = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(requestData());
    console.log(sagaData);
  }, []);

  return (
    <Router>
      <Suspense>
        <button
          onClick={() => {
            dispatch(requestData());
          }}
        >
          fetch
        </button>
        <Routes />
      </Suspense>
    </Router>
  );
};

export default App;
