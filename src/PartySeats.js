import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styles from './styles.css';

const parties = (nationalsCandidate) => {
  if (nationalsCandidate === true) {
    return ['Labor', 'Liberal', 'Nationals'];
  }
  return ['Labor', 'Liberal'];
};

function PartySeats(props) {
  const { seats, party, setSeats } = props;

  const seatsArray = [];

  seats.forEach(
    (seat) => {
      if (seat.party === party) {
        seatsArray.push(seat);
      }
    },
  );

  if (seatsArray.length > 0) {
    return (
      <div className="partyContainer">
        <h2>{party}</h2>
        {seatsArray.map(
          (seat, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className={styles.seat}>
              <h3>{seat.name}</h3>
              <br />
              <Autocomplete
                value={seat.party}
                onChange={(event, newValue) => {
                  const updatedSeat = seat;
                  updatedSeat.party = newValue;
                  const updatedSeats = seats.map((mappedSeat) => (
                    mappedSeat.name === updatedSeat.name ? updatedSeat : mappedSeat));
                  setSeats(updatedSeats);
                }}
                disableClearable
                inputValue={seat.party}
                options={parties(seat.nationalsCandidate)}
                style={{ width: 127 }}
                // eslint-disable-next-line react/jsx-props-no-spreading
                renderInput={(params) => <TextField {...params} size="small" variant="standard" />}
              />
            </div>
          ),
        )}
      </div>
    );
  }
  return <></>;
}

PartySeats.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  seats: PropTypes.array.isRequired,
  party: PropTypes.string.isRequired,
  setSeats: PropTypes.func.isRequired,
};

export default PartySeats;
