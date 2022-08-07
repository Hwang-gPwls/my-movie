import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  BsFillHouseDoorFill,
  BsLayoutTextSidebarReverse,
} from "react-icons/bs";

const Menu = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Container>
      <div className="nav">
        <Link to={"/"} key={"home"}>
          <BsFillHouseDoorFill />
        </Link>
        <Link to={"/scrapscreen"} key={"scrap"}>
          <BsLayoutTextSidebarReverse />
        </Link>
      </div>
    </Container>
  );
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

export default Menu;
