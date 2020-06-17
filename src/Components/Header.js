import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;
  background-color: black;
  color: white;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 100px;
  text-align: center;
  border-bottom: 3px solid ${(props) => (props.current ? "red" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const Slink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const HeaderC = ({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <Slink to="/">HOME</Slink>
      </Item>
      <Item current={pathname === "/product"}>
        <Slink to="/product">PRODUCT</Slink>
      </Item>
      <Item current={pathname === "/company"}>
        <Slink to="/company">COMPANY</Slink>
      </Item>
    </List>
  </Header>
);

export default withRouter(HeaderC);
