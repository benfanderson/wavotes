export function partyCandidates(nationalsCandidate) {
  if (nationalsCandidate === true) {
    return ['Labor', 'Liberal', 'Nationals'];
  }
  return ['Labor', 'Liberal'];
}

export function partyColour(party) {
  if (party === 'Labor') {
    return '#DE3533';
  } if (party === 'Liberal') {
    return '#0047AB';
  }
  return '#006644';
}
