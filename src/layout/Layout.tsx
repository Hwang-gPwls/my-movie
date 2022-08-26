import Filter from "layout/Filter";
import Menu from "layout/Menu";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "styles/global-style";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
      <Filter />
      <main>{props.children}</main>
      <Menu />
    </ThemeProvider>
  );
};

export default Layout;
