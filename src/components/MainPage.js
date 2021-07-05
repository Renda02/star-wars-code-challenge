import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Card } from "./Card";

export const MainPage = () => {
  const [listCharacters, setListCharacter] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setListCharacter(data.results);
        setNextUrl(data.next);
      });
  }, []);

  //searching Ccharacters
  function getCharacters() {
    fetch(`https://swapi.dev/api/people/?search=${searchCharacter}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setListCharacter(data.results);
        setHistory([...history, { searchCharacter, data }]);
        setNextUrl(data.next);
      });
  }

  //change the state of app-need to be in the scope
  function moreCharacters() {
    fetch(nextUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setListCharacter([...listCharacters, ...data.results]);

        setNextUrl(data.next);
      });
  }

  return (
    <CardContainer>
      <InputWrapper>
        <Input
          type="text"
          required
          placeholder="Search Character"
          onChange={(event) => {
            setSearchCharacter(event.target.value);
          }}
        />
        <Button onClick={getCharacters}>Search</Button>
      </InputWrapper>
      <History>
        <RecentSearch>Recent search: </RecentSearch>
        {history.map((item) => {
          return (
            <RecentSearchButton
              onClick={() => {
                setListCharacter(item.data.results);
              }}
            >
              {item.searchCharacter}
            </RecentSearchButton>
          );
        })}
      </History>
      <Row>
        {listCharacters.map((character) => {
          return <Card character={character}></Card>;
        })}
      </Row>{" "}
      <InputWrapper>
        <Button onClick={moreCharacters}>Load More</Button>{" "}
      </InputWrapper>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  padding: 40px 0;
  color: #f1f1f1;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecentSearch = styled.span`
  color: #3d0478;
`;

const History = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.2em;
`;

const Input = styled.input`
  margin-right: 0.5em;
  font-family: inherit;
  text-align: inherit;
  padding: 0.5em;
  width: 40%;
  border: 1px solid #3d0478;
  border-radius: 3px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
  background: #3d0478;
  color: #fff;
  border: 0;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:hover,
  :active {
    background: #fff;
    color: #3d0478;
    border: 1px solid #3d0478;
  }
`;

const RecentSearchButton = styled.button`
  display: inline-block;
  padding: 0.25em 0.5em;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
  background: #fff;
  color: #3d0478;
  border: 0;
  letter-spacing: 0.5px;
  cursor: pointer;
  border: 1px solid #3d0478;

  &:hover,
  :active {
    background: #3d0478;
    color: #fff;
    border: 1px solid #3d0478;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  @media (max-width: 920px) {
    display: grid;
    grid-template-columns: 300px;
    grid-gap: 10px;
  }
`;
