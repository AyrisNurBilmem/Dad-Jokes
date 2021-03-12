
import React from "react";

function Random({randomJoke, joke, h3}){

return (
    <section >
     <div>
      <button onClick = {randomJoke}>Random Joke</button>
    </div>
    <div className = "randomJoke" >
      <h3 className = "jokeh3">Random Dad Joke</h3>
      <p className = "jokePar">{joke}</p>
    </div>
    </section>
)
}

export default Random;