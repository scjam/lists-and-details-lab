import React from 'react';
import PropTypes from 'prop-types';
import Character from './CharacterDetails';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character._id}>
      <Link to={`/details/${character._id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;
