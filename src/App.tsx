import { Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes";

const Routes = () => {
  return useRoutes(routes);
};

const App = () => {
  return (
    <Router>
      <Suspense>
        <Routes />
      </Suspense>
    </Router>
  );
};

export default App;
