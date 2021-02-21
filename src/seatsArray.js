const seatsArray = [
  {
    name: 'Albany',
    party: 'Labor',
    nationalsCandidate: true,
  },
  {
    name: 'Armadale',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Balcatta',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Baldivis',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Bassendean',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Bateman',
    party: 'Liberal',
    nationalsCandidate: false,
  },
  {
    name: 'Belmont',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Bicton',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Bunbury',
    party: 'Labor',
    nationalsCandidate: true,
  },
  {
    name: 'Burns Beach',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Butler',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Cannington',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Carine',
    party: 'Liberal',
    nationalsCandidate: false,
  },
  {
    name: 'Central Wheatbelt',
    party: 'Nationals',
    nationalsCandidate: true,
  },
  {
    name: 'Churchlands',
    party: 'Liberal',
    nationalsCandidate: false,
  },
  {
    name: 'Cockburn',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Collie-Preston',
    party: 'Labor',
    nationalsCandidate: true,
  },
  {
    name: 'Cottesloe',
    party: 'Liberal',
    nationalsCandidate: false,
  },
  {
    name: 'Dawesville',
    party: 'Liberal',
    nationalsCandidate: true,
  },
  {
    name: 'Darling Range',
    party: 'Liberal',
    nationalsCandidate: false,
  },
  {
    name: 'Forrestfield',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Fremantle',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Geraldton',
    party: 'Nationals',
    nationalsCandidate: true,
  },
  {
    name: 'Girrawheen',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Hillarys',
    party: 'Liberal',
    nationalsCandidate: false,
  },
  {
    name: 'Jandakot',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Joondalup',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Kalamunda',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Kalgoorlie',
    party: 'Liberal',
    nationalsCandidate: true,
  },
  {
    name: 'Kimberley',
    party: 'Labor',
    nationalsCandidate: true,
  },
  {
    name: 'Kingsley',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Kwinana',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Mandurah',
    party: 'Labor',
    nationalsCandidate: true,
  },
  {
    name: 'Maylands',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Midland',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Mirrabooka',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Moore',
    party: 'Nationals',
    nationalsCandidate: true,
  },
  {
    name: 'Morley',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Mount Lawley',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Murray-Wellington',
    party: 'Labor',
    nationalsCandidate: true,
  },
  {
    name: 'Nedlands',
    party: 'Liberal',
    nationalsCandidate: false,
  },
  {
    name: 'North West Central',
    party: 'Nationals',
    nationalsCandidate: true,
  },
  {
    name: 'Perth',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Pilbara',
    party: 'Labor',
    nationalsCandidate: true,
  },
  {
    name: 'Riverton',
    party: 'Liberal',
    nationalsCandidate: false,
  },
  {
    name: 'Roe',
    party: 'Nationals',
    nationalsCandidate: true,
  },
  {
    name: 'Rockingham',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Scarborough',
    party: 'Liberal',
    nationalsCandidate: false,
  },
  {
    name: 'South Perth',
    party: 'Liberal',
    nationalsCandidate: false,
  },
  {
    name: 'Southern River',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Swan Hills',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Thornlie',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Vasse',
    party: 'Liberal',
    nationalsCandidate: true,
  },
  {
    name: 'Victoria Park',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Wanneroo',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Warnbro',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Warren-Blackwood',
    party: 'Nationals',
    nationalsCandidate: true,
  },
  {
    name: 'West Swan',
    party: 'Labor',
    nationalsCandidate: false,
  },
  {
    name: 'Willagee',
    party: 'Labor',
    nationalsCandidate: false,
  },
];

export default seatsArray;
