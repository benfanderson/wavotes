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
  seats.map(
    // eslint-disable-next-line array-callback-return
    (seat) => {
      // eslint-disable-next-line no-unused-expressions
      seat.party === party
            && seatsArray.push(seat);
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
                  // eslint-disable-next-line no-shadow
                  const updatedSeats = seats.map((seat) => (
                    seat.name === updatedSeat.name ? updatedSeat : seat));
                  setSeats(updatedSeats);
                }}
                disableClearable
                inputValue={seat.party}
                options={parties(seat.nationalsCandidate)}
                style={{ width: 127, height: 40 }}
                // eslint-disable-next-line react/jsx-props-no-spreading
                renderInput={(params) => <TextField {...params} variant="outlined" />}
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
