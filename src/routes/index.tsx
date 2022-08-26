import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const MainLayout = lazy(() => import("layout/Layout"));
const HomeScreen = lazy(() => import("pages/HomeScreen"));
const ScrapScreen = lazy(() => import("pages/ScrapScreen"));

export const routes: RouteObject[] = [
  {
    children: [
      {
        element: <HomeScreen />,
        index: true,
      },
      {
        element: <ScrapScreen />,
        path: "/scrapscreen",
      },
    ],
  },
];
