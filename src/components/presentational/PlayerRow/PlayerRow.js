import React from 'react';
import Proptypes from 'prop-types';

const playerName = (name)=>{

  const newName = name.split(', ')
  return newName[1]+' '+newName[0]

}


const PlayerRow = ({ player }) => {
  return (
    <tr>
      <td>{playerName(player.name)}</td>
      <td>{player.position}</td>
      <td>{player.team}</td>
      <td>{player.height}</td>
      <td>{player.weight}</td>
      <td>{player.adp}</td>
    </tr>
  )
}

PlayerRow.propTypes = {
  player: Proptypes.object,
}
export default PlayerRow;
