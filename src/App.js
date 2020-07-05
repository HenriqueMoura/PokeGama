import React from 'react';
import axios from 'axios'


function App() {

  function getPokemon(){
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(Response => console.log(Response.data.results))
  }
  getPokemon(); 
 
  return (
    <div className="App">
    </div>
  );
}

export default App;
