/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getCharacterById } from '../../services/heyArnoldCharacters';
import CharacterDetails from '../../components/character/CharacterDetails';

export default class Details extends Component {
  state = {
    character: {}
  }

  componentDidMount() {
    getCharacterById(this.props.match.params.id)
      .then(character => this.setState({ character }));
  }
  
  render() {
    const { character } = this.state;
    return (
      <CharacterDetails {...character} />
    );
  }
}
