/* eslint-disable max-len */
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
      electionResult = `Hung parliament, however if the Liberals and Nationals formed a coalition, 
      they would have a majority of ${(liberal.length + nationals.length) - 29}`;
    }
    return electionResult;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> WA VOTES</h1>
      <p className={styles.blurb}>How will WA vote in the 2021 election? Change some seats below to see how it will effect the overall result. </p>
      <p className={styles.result}>{result()}</p>
      <div className={styles.partiesDivContainer}>
        <PartySeats seats={seats} setSeats={setSeats} party="Labor" />
        <PartySeats seats={seats} setSeats={setSeats} party="Liberal" />
        <PartySeats seats={seats} setSeats={setSeats} party="Nationals" />
      </div>
    </div>

  );
}

export default App;
