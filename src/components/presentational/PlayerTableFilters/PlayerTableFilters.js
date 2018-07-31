import React from 'react';
import { FormGroup, Checkbox, FormControl } from 'react-bootstrap';

import './PlayerTableFilters.css';

const PlayerTableFilters = () => {
  return (
    <div className="PlayerTableFilters">
      <FormGroup  >
        <Checkbox inline>QB</Checkbox>
        <Checkbox inline>RB</Checkbox>
        <Checkbox inline>WR</Checkbox>
        <Checkbox inline>TE</Checkbox>
      </FormGroup>
      <FormControl type="text" placeholder="Search by Name" />
    </div>
  )
}

export default PlayerTableFilters;
