import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { partyCandidates, partyColour } from '../helper';
import '../styles/partySeatsStyle.scss';

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
      <div className="partyContainer" style={{ border: `2px solid ${partyColour(party)}` }}>
        <h2 className="partyName">
          {`${party} - ${seatsArray.length} ${seatsArray.length > 1 ? 'seats' : 'seat'}` }
        </h2>
        <div className="seatsContainer">
          {seatsArray.map(
            (seat, index) => (
            // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="seat">
                <h3 className="seatName">{seat.name}</h3>
                <Autocomplete
                  className="seatSelection"
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
                  options={partyCandidates(seat.nationalsCandidate)}
                // eslint-disable-next-line react/jsx-props-no-spreading
                  renderInput={(params) => <TextField {...params} size="small" label="Change Party" variant="outlined" />}
                />
              </div>
            ),
          )}
        </div>
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
