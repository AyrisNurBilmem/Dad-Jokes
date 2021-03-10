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



  function handleInput(event) {
    let s = event.target.value;

    setState(prevValue =>{
      return {...prevValue,earch:s}
    })
    
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
        <Random/>
      </main>
    </div>
  );
}

export default App;
