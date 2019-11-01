import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state ={
    pokemons: [],
    filteredPokemon: [],
    query: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(data => {
      this.setState({
        pokemons: data
      })
      this.filterPokemons(data, "")
    })
  }

  searchController = (e) => {
    this.setState({
      query: e.target.value
    })
    this.filterPokemons(this.state.pokemons, e.target.value)
  }

  filterPokemons = (pokemons, query) => {
    this.setState({
      filteredPokemon: pokemons.filter(pokemon => pokemon.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onSearchChange={(e) => this.searchController(e)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.filteredPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
