import styled from "styled-components";

export const SubNav = styled.nav`
  position: relative;
  top: 50px;
  background-color: #F9F3CC;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  img {
    height: 100%;
    width: 100px;
  }
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  background-color: #141e46;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  .brand {
    font-weight: 900;
  }

  @media screen and (max-width: 992px) {
    max-width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 535px) {
    max-width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 1em;

  li a {
    padding: 0.4em 0.6em;
    color: #bf40bf;
    font-weight: 700;
  }

  .active {
    background-color: #0000ff;
    color: #fff;
  }

  button {
    color: #e32d40;
    font-weight: 500;
  }

  @media screen and (max-width: 535px) {
    display: wrap;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: 0.8em;
    letter-spacing: 0.1em;
    margin-bottom: 1em;

    li a {
      padding: 0.2em 3em;
    }
  }
`;
