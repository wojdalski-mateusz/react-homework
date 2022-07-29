import styled, {css} from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  margin-left: 10px;
  padding: 0;
  border: none;
  background: none;

  ${({ primary }) =>
    primary &&
    css`
      background: white;
      color: black;
    `}
`;
