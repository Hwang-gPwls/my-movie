import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./../../styles/global-style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../styles/theme";

export const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
};

export default MainLayout;
