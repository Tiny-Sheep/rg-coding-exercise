import React, { Component } from 'react';

import { fetchPlayers, fetchADP } from './apiCalls';

import PlayerTable from '../../presentational/PlayerTable';
import PlayerTableFilters from '../../presentational/PlayerTableFilters';
import Loading from '../../presentational/Loading'

class PlayerTableContainer extends Component {
  state = {
    players: [],

  }
  componentDidMount = async () => {
    const players = await fetchPlayers();
    const data = await fetchADP();
    this.setState({ players: this.addADP(players, data) });
  }

  addADP = (players, adp) => {
    // go through each element in players array
    const adpHash = {};

    adp.forEach(entry=>{
      adpHash[entry.id] = entry.averagePick
    })


    const newPlayers = players.map((player) => {
      // player.adp = 400
      // adp.forEach(singleADP => {
      //   if (singleADP.id === player.id) {
      //     if (singleADP.averagePick) {
      //       player.adp = Number(singleADP.averagePick)
      //     }
      //   }
      // })
      // return player
      if (adpHash[player.id]){
        player.adp=Number(adpHash[player.id])
      }else{
        player.adp=400
      }
      return player
    })
    // check if adp has id
    // if a match exists i want modify that player object

    // if  one doesnt exist make it 400

    // return the entire list of arrays
    return newPlayers.sort((a, b) => {
      return a.adp - b.adp
    })
  }



  render() {
    const { players } = this.state;

    return (

      players.length ?
        <div>
          <PlayerTableFilters />
          <PlayerTable players={players} />
        </div>
        : <Loading />

    );
  }
}

export default PlayerTableContainer;
