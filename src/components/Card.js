import styled from "styled-components";
import React from "react";

export const Card = ({character}) => {
  return <CardContainer>
      <Cards>  <h4>{character.name}</h4>
        <p>Height: {character.height} cm</p>
        <p>Birth of year: {character.birth_year}</p>
        <p>{character.films.length} films</p></Cards>
        
  </CardContainer>;
};

const CardContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  padding: 40px 0;
  color: #f1f1f1;
  margin: 0 auto;
`;

const Cards = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: #511E86;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border-top: rgba(255, 255, 255, 0.2);
  border-left: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;
