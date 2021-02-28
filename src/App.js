import React, { useState } from 'react';
import seatsArray from './seatsArray';
import PartySeats from './PartySeats';
import styles from './styles.css';

function App() {
  const [seats, setSeats] = useState(seatsArray);

  const labor = [];
  const liberal = [];
  const nationals = [];

  seats.forEach((seat) => {
    if (seat.party === 'Labor') {
      labor.push(seat);
    } else if (seat.party === 'Liberal') {
      liberal.push(seat);
    } else {
      nationals.push(seat);
    }
  });

  function result() {
    let electionResult;
    if (labor.length > 29) {
      electionResult = `Labor majority of ${labor.length - 29}`;
    } if (liberal.length > 29) {
      electionResult = `Liberal majority of ${liberal.length - 29}`;
    } if (labor.length < 30 && liberal.length < 30) {
      electionResult = 'Hung parliament, however the Liberals could form government if they entered into a coalition with the Nationals';
    }
    return electionResult;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Pick your 2021 WA state election parliament</h1>
      <p className={styles.result}>{result()}</p>
      <p className={styles.blurb}>Click on a seat to change the party</p>
      <PartySeats seats={seats} setSeats={setSeats} party="Labor" />
      <PartySeats seats={seats} setSeats={setSeats} party="Liberal" />
      <PartySeats seats={seats} setSeats={setSeats} party="Nationals" />
    </div>

  );
}

export default App;
