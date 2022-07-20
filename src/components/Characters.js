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
        {characters.map(({ image, name, species, status }) => (
          <div className="character-card">
            <img src={image} alt={name + " - photo"} />
            <p>Imię: {name}</p>
            <p>Gatunek: {species}</p>
            <p>Status: {status}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Characters;
