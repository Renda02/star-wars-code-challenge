import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Card } from "./Card";

export const MainPage = () => {
  const [listCharacters, setListCharacter] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [nextUrl, setNextUrl] = useState("");

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
        type="text" required placeholder="Search Character"
          onChange={(event) => {
            setSearchCharacter(event.target.value);
          }}/>
        <Button onClick={getCharacters}>Search</Button>
      </InputWrapper>
      <React.Fragment>
        {listCharacters.map((character) => {
          return <Card character={character}></Card>;
        })}
      </React.Fragment>    <InputWrapper>
      <Button onClick={moreCharacters}>Load More</Button>    </InputWrapper>
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
display:flex;
justify-content: center;
align-items:center;

`;

const Input = styled.input`
margin-right:0.5em;
font-family:inherit;
text-align:inherit;
padding:0.5em;
width: 40%;
border: 1px solid #3D0478;
border-radius: 3px;
`;

const Button = styled.button`
display:inline-block;
padding: 0.5em 1em;
border-radius: 5px;
text-transform: uppercase;
font-weight: 500;
background:#3D0478;
color:#fff;
border:0;
letter-spacing:0.5px;
cursor:pointer;

&:hover,
:active{
    background: #fff;
    color:#3D0478;
    border: 1px solid #3D0478
  }
`;


