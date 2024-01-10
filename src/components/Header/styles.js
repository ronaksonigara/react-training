import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: blue;
  gap: 4px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
  color: #fff;
`;
