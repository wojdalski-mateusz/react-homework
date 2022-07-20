import { useEffect, useState } from "react";

const BASE_URL = "https://rickandmortyapi.com/api/character";

function Characters() {
  const [characters, setCharacters] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      const characters = data.results;
      setCharacters(characters);
    };
    fetchData();
  }, []);

  return (
    <>
<h1>Rick&Morty</h1>
<h2>Characters</h2>      
<div className="characters-container">
        {characters.map((character) => (
          <div className="character-card">
            <img src={character.image} alt={character.name + " - photo"} />
            <p>Imię: {character.name}</p>
            <p>Gatunek: {character.species}</p>
            <p>Status: {character.status}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Characters;
