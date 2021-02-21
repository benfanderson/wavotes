import React, { useState } from 'react';
import seatsArray from './seatsArray';
import PartySeats from './PartySeats';

function App() {
  const [seats, setSeats] = useState(seatsArray);

  return (
    <div className="App">
      <PartySeats seats={seats} setSeats={setSeats} party="Labor" />
      <PartySeats seats={seats} setSeats={setSeats} party="Liberal" />
      <PartySeats seats={seats} setSeats={setSeats} party="Nationals" />
    </div>

  );
}

export default App;