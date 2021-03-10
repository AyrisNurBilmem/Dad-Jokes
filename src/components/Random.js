import React,{useState, useEffect} from "react";

function Random(){

    const [joke, setJoke] = useState("");
  
    const apikey = "https://icanhazdadjoke.com/";
    // generate random joke
  function randomJoke() {
    fetch(apikey)
    .then(res => res.json())
    .then(data => setJoke(data.value.joke));
    
  } 

  useEffect(() =>{
      randomJoke();
  }, []);
  //

return (
    <section className = "randomJoke">
        <h3>Random Dad Joke</h3>
        <p>{joke}</p>
        <button onClick = {randomJoke}>Random Joke</button>
    </section>
)
}

export default Random;