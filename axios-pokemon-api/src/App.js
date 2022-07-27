import './App.css';
import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [nextPokemon, setNextPokemon] = useState("");

  const URL = "https://pokeapi.co/api/v2/pokemon/";

  const fetchPokemon = async (url) => {
    try{
      const response = await axios.get(url);
      //const data = await response.json();
      setPokemon([
        ...pokemon,
        ...data.results
      ]);
      setNextPokemon(data.next);
      console.log(data);
    }catch(error){
      console.log("Error getting pokemon", error)
    }  
  }

  useEffect( ()=>{
    fetchPokemon(URL);
  },[URL])

  const getPokemon = () =>{
    fetchPokemon(nextPokemon);
  }

  return (
    <div className="App">
      {
        pokemon.map((p, i) => {
          return(
            <div className='pokemon' key={i}>
              <h4>{p.name}</h4>
            </div>
          )
        })
      }

      <Button variant="contained" onClick={getPokemon}>Fetch More Pokemon</Button>
      
    </div>
  );
}

export default App;
