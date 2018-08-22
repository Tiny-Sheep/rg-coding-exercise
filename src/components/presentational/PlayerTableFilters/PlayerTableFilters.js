import React from 'react';
import { FormGroup, Checkbox, FormControl } from 'react-bootstrap';

import './PlayerTableFilters.css';

const PlayerTableFilters = (props) => {
  return (
    <div className="PlayerTableFilters">
      <FormGroup onClick={props.filterTable} >
        <Checkbox name='QB' inline>QB</Checkbox>
        <Checkbox name='RB' inline>RB</Checkbox>
        <Checkbox name='WR' inline>WR</Checkbox>
        <Checkbox name='TE' inline>TE</Checkbox>
      </FormGroup>
      <FormControl type="text" placeholder="Search by Name" />
    </div>
  )
}

export default PlayerTableFilters;
