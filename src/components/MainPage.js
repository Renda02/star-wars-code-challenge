import React, {useState, useEffect} from 'react';

function Card(){
    return <div>
        <h4>Rendani</h4>
        <p>Heaight: 55</p>
        <p>Age: rr</p>
    </div>
}

export const MainPage = () => {
const [listCharacters, setListCharacter] = useState ([]);
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

}

    return (
        <div>
<div>
    <input></input>
</div>


          {listCharacters.map((character)=>{
              return <Card character={character}></Card>
          })}
          <button onClick={moreCharacters}>Load More</button>
        </div>
    )
}
