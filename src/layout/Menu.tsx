import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  BsFillHouseDoorFill,
  BsLayoutTextSidebarReverse,
} from "react-icons/bs";

const Footer = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Container>
      <div className="nav">
        <Link to={"/"} key={"home"}>
          <BsFillHouseDoorFill size="30" color="#fff" />
        </Link>
        <Link to={"/scrapscreen"} key={"scrap"}>
          <BsLayoutTextSidebarReverse size="30" color="#fff" />
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 7vh;
  padding: 1rem 8rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 0.625rem;
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  border-radius: 5px;
  background-color: #000;
  .nav {
    display: flex;
    align-items: center;
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }
`;

export default Footer;
