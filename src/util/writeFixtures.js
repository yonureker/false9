const fixtureData = [
  {
    matchday: 'Group stage - Matchday 1',
    data: {
      matches: [
        {homeTeam: 'Turkey', awayTeam: 'Italy'},
        {homeTeam: 'Wales', awayTeam: 'Switzerland'},
        {homeTeam: 'Denmark', awayTeam: 'Finland'},
        {homeTeam: 'Belgium', awayTeam: 'Russia'},
        {homeTeam: 'Austria', awayTeam: 'North Macedonia'},
        {homeTeam: 'Netherlands', awayTeam: 'Ukraine'},
        {homeTeam: 'England', awayTeam: 'Croatia'},
        {homeTeam: 'Scotland', awayTeam: 'Czech Republic'},
        {homeTeam: 'Poland', awayTeam: 'Slovakia'},
        {homeTeam: 'Spain', awayTeam: 'Sweden'},
        {homeTeam: 'Hungary', awayTeam: 'Portugal'},
        {homeTeam: 'France', awayTeam: 'Germany'},
      ],
    },
  },
  {
    matchday: 'Group stage - Matchday 2',
    data: {
      matches: [
        {homeTeam: 'Finland', awayTeam: 'Russia'},
        {homeTeam: 'Turkey', awayTeam: 'Wales'},
        {homeTeam: 'Italy', awayTeam: 'Switzerland'},
        {homeTeam: 'Ukraine', awayTeam: 'North Macedonia'},
        {homeTeam: 'Denmark', awayTeam: 'Belgium'},
        {homeTeam: 'Netherlands', awayTeam: 'Austria'},
        {homeTeam: 'Sweden', awayTeam: 'Slovakia'},
        {homeTeam: 'Croatia', awayTeam: 'Czech Republic'},
        {homeTeam: 'England', awayTeam: 'Scotland'},
        {homeTeam: 'Hungary', awayTeam: 'France'},
        {homeTeam: 'Portugal', awayTeam: 'Germany'},
        {homeTeam: 'Spain', awayTeam: 'Poland'},
      ],
    },
  },
  {
    matchday: 'Group stage - Matchday 3',
    data: {
      matches: [
        {homeTeam: 'Italy', awayTeam: 'Wales'},
        {homeTeam: 'Switzerland', awayTeam: 'Turkey'},
        {homeTeam: 'Ukraine', awayTeam: 'Austria'},
        {homeTeam: 'North Macedonia', awayTeam: 'Netherlands'},
        {homeTeam: 'Finland', awayTeam: 'Belgium'},
        {homeTeam: 'Russia', awayTeam: 'Denmark'},
        {homeTeam: 'Czech Republic', awayTeam: 'England'},
        {homeTeam: 'Croatia', awayTeam: 'Scotland'},
        {homeTeam: 'Sweden', awayTeam: 'Poland'},
        {homeTeam: 'Germany', awayTeam: 'Hungary'},
        {homeTeam: 'Portugal', awayTeam: 'France'},
      ],
    },
  },
];

const writeFixtures = () => {
  fixtureData.map(async (round) => {
    try {
      await firestore().collection('fixtures').doc(round.matchday).set(round.data);

      console.log('file written to firestore');
    } catch (error) {
      console.log();
    }
  });
};