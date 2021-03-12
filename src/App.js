import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Random from "./components/Random";

function App() {

  const [state, setState] = useState({
    s:"",
    results :[]
  });

  const [joke, setJoke] = useState("");
  
  const apikey = 'https://icanhazdadjoke.com/';



  function handleInput(event) {
    let s = event.target.value;

    setState(prevValue =>{
      return {...prevValue,earch:s}
    })
  }

 
  // generate random joke
  async function randomJoke() {
    const jokeData = await fetch(apikey, {
      headers: {
        'Accept':'application/json'
      }
    });

    //get the joke object
    const jokeObject = await jokeData.json(); 
    //set the joke
    setJoke(jokeObject.joke);
     
  } 


  function searchCards(event) {
  }
    
  
  
  return (
    <div className="App">
      <header>
        dad jokes database
      </header>
      <main>
        <Search  handleInput = {handleInput} searchCards = {searchCards}/>
        <Random randomJoke = {randomJoke} joke = {joke}/>
      </main>
    </div>
  );
}

export default App;
