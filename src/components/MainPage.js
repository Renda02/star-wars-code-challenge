import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import { Card } from './Card';


export const MainPage = () => {
const [listCharacters, setListCharacter] = useState ([]);
const [searchCharacter,setSearchCharacter] = useState("");
const [nextUrl,setNextUrl] = useState ("");


useEffect(() => {
   fetch("https://swapi.dev/api/people/")
   .then(function(response){
       return response.json()
   }).then(function(data){
       setListCharacter(data.results);
       setNextUrl(data.next)
   })
}, [])

//searching Ccharacters
function getCharacters(){
    fetch(`https://swapi.dev/api/people/?search=${searchCharacter}`)
    .then(function(response){
        return response.json()
    }).then(function(data){
        setListCharacter(data.results);
        setNextUrl(data.next)})
}

//change the state of app-need to be in the scope
function moreCharacters(){
    fetch(nextUrl)
    .then(function(response){
        return response.json()
    }).then(function(data){
        setListCharacter([
            ...listCharacters,
            ...data.results
        ])
        
        setNextUrl(data.next)
    })

};

    return (
        <CardContainer>
<div>
    <input onChange={(event)=>{setSearchCharacter(event.target.value)}}></input>
    <button onClick={getCharacters}>Search character</button>
</div>


          {listCharacters.map((character)=>{
              return <Card character={character}></Card>
          })}
          <button onClick={moreCharacters}>Load More</button>
        </CardContainer>
    )
}


const CardContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  padding: 40px 0;
  color: #f1f1f1;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
`;
