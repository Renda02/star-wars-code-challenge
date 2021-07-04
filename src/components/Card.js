import styled from "styled-components";
import React from "react";

export const Card = ({ character }) => {
  return (
    <CardContainer>
      <Cards>
        {" "}
        <Title>{character.name}</Title>
        <Text>Height: {character.height} cm</Text>
        <Text>Birth of year: {character.birth_year}</Text>
        <Text>{character.films.length} films</Text>
      </Cards>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  max-width: 1200px;
margin-top:2em;
`;

const Cards = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-top: rgba(255, 255, 255, 0.2);
  border-left: rgba(255, 255, 255, 0.2);
`;

const Title = styled.h4`
  color: #3d0478;
  font-size: 16px;
  line-height: 28px;
  font-weight: 500;
`;

const Text = styled.p`
  color: #5f5f5f;
  font-size: 11px;
  line-height: 25px;
  font-weight: 400;
`;
