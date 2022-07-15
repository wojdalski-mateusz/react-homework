import { useEffect, useState } from "react";

function Characters() {
  const [characters, setCharacters] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
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
