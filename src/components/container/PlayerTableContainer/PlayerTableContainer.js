import React, { Component } from 'react';

import { fetchPlayers, fetchADP } from './apiCalls';

import PlayerTable from '../../presentational/PlayerTable';
import PlayerTableFilters from '../../presentational/PlayerTableFilters';
import Loading from '../../presentational/Loading'

class PlayerTableContainer extends Component {
  state = {
    players: [],
    selectedPositions: {
      "QB": false,
      "RB": false,
      "WR": false,
      "TE": false,
    }
  }
  componentDidMount = async () => {
    const players = await fetchPlayers();
    const data = await fetchADP();
    this.setState({ players: this.addADP(players, data) });
  }

  addADP = (players, adp) => {
    // go through each element in players array
    const adpHash = {};

    adp.forEach(entry => {
      adpHash[entry.id] = entry.averagePick
    })


    const newPlayers = players.map((player) => {
      if (adpHash[player.id]) {
        player.adp = Number(adpHash[player.id])
      } else {
        player.adp = 400
      }
      return player
    })

    return newPlayers.sort((a, b) => {
      return a.adp - b.adp
    })
  }

  filterTable = (evt) => {
    const positions = {}
    positions[evt.target.name] = evt.target.checked
    this.setState((prevState) => {
      return { selectedPositions: { ...prevState.selectedPositions, ...positions } }
    });

  }



  render() {
    const { players, selectedPositions } = this.state;
    const falseCount = ((selectedPositions)=>{
      let i = 0
      for (const key in selectedPositions){
        if(selectedPositions[key]){
          i+=1
        }
      }
      return i
    })(selectedPositions)


    return (

      players.length ?
      <div>
          <PlayerTableFilters filterTable={this.filterTable} />
          <PlayerTable players={players} selectedPositions={selectedPositions} falseCount={falseCount} />
        </div>
        : <Loading />

    );
  }
}

export default PlayerTableContainer;
