import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state ={
    front: true
  }
  
  togglePhotoHandler = () => {
    this.setState({
      front: !this.state.front
    })
  }

  render() {
    return (
      <Card onClick={this.togglePhotoHandler}>
        <div>
          <div className="image">
            {this.state.front ? <img src={this.props.pokemon.sprites.front} alt={this.props.pokemon.name} /> : <img src={this.props.pokemon.sprites.back} alt={this.props.pokemon.name} /> }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.filter(stat => stat.name === 'hp')[0].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
