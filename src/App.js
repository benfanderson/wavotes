import React, { useState } from 'react';
import seatsArray from './seatsArray';
import PartySeats from './PartySeats';
import styles from './styles.css';

function App() {
  const [seats, setSeats] = useState(seatsArray);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Pick your 2021 WA state election parliament</h1>
      <p className={styles.blurb}>Click on a seat to change the party</p>
      <PartySeats seats={seats} setSeats={setSeats} party="Labor" />
      <PartySeats seats={seats} setSeats={setSeats} party="Liberal" />
      <PartySeats seats={seats} setSeats={setSeats} party="Nationals" />
    </div>

  );
}

export default App;
