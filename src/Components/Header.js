import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
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
`;

const Slink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export default () => (
  <Header>
    <List>
      <Item>
        <Slink to="/">Movies</Slink>
      </Item>
      <Item>
        <Slink to="/tv">TVShows</Slink>
      </Item>
      <Item>
        <Slink to="/search">Search</Slink>
      </Item>
    </List>
  </Header>
);
