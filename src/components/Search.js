import React from "react";

function Search({handleInput}, searchCards){
    return (
        <section>
            <input 
                type ="text"
                placeholder ="Search a joke..."
                onChange = {handleInput}
                onKeyPress = {() => searchCards()}
            />
        </section>
    );
}

export default Search;