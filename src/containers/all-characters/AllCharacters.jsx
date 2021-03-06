import React, { Component } from 'react';
import { getCharacters } from '../../services/heyArnoldCharacters.js';
import CharacterList from '../../components/character/CharacterList.jsx';

export default class AllCharacters extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters()
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    
    return (
      <CharacterList characters={characters} />
    );
  }
}
