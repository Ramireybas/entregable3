import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Characters = ({ url }) => {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios.get(url)
      .then(res => setCharacter(res.data))
  }, [])
  console.log(character)


  return (
    <li className='character'>
      <div className='card'>
        <img src={character.image} alt="" />
        <p>Name: {character.name}</p>
        <p>Status: {character.status}</p>
        <p>Number of appearance in episode : {character.episode?.length}</p>
        <p>Home planet: {character.origin?.name}</p>
      </div>
    </li>
  );
};

export default Characters;