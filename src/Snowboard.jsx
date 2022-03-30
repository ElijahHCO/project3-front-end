import React from 'react';
import './App.css';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import Nav from './Nav';

function Snowboard() {
  return (
    <div className="App">
      <h2>Snowboard</h2>
     <EquipmentContainer></EquipmentContainer>
    </div>
  );
}

export default Snowboard;
