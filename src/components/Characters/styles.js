import styled from "styled-components";

export const CharactersWrapper = styled.div`
  columns: 4 auto;
`;

export const characterImage = styled.img`
  height: 150px;
  width: 150px;
  src: ${(props) => props.src};
`;

export const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background-color: rgb(0, 0, 0);
  color: white;
  padding: 10px 0px;
`;
