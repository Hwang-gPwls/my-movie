import styled from "styled-components";

const Header = () => {
  return <>this is header</>;
};

const Container = styled.div`
  height: 6vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.black};

  .nav {
    display: flex;
    align-items: center;
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }
`;

export default Header;
