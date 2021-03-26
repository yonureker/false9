import Austria from '../../assets/NationalTeams/austria.svg';
import Belgium from '../../assets/NationalTeams/belgium.svg';
import Croatia from '../../assets/NationalTeams/croatia.svg';
import Czech_Republic from '../../assets/NationalTeams/czech_republic.svg';
import Denmark from '../../assets/NationalTeams/denmark.svg';
import England from '../../assets/NationalTeams/england.svg';
import Finland from '../../assets/NationalTeams/finland.svg';
import France from '../../assets/NationalTeams/france.svg';
import Germany from '../../assets/NationalTeams/germany.svg';
import Hungary from '../../assets/NationalTeams/hungary.svg';
import Italy from '../../assets/NationalTeams/italy.svg';
import Netherlands from '../../assets/NationalTeams/netherlands.svg';
import North_Macedonia from '../../assets/NationalTeams/north_macedonia.svg';
import Poland from '../../assets/NationalTeams/poland.svg';
import Portugal from '../../assets/NationalTeams/portugal.svg';
import Russia from '../../assets/NationalTeams/russia.svg';
import Scotland from '../../assets/NationalTeams/scotland.svg';
import Slovakia from '../../assets/NationalTeams/slovakia.svg';
import Spain from '../../assets/NationalTeams/spain.svg';
import Sweden from '../../assets/NationalTeams/sweden.svg';
import Switzerland from '../../assets/NationalTeams/switzerland.svg';
import Turkey from '../../assets/NationalTeams/turkey.svg';
import Ukraine from '../../assets/NationalTeams/ukraine.svg';
import Wales from '../../assets/NationalTeams/wales.svg';
import {scale} from 'react-native-size-matters';

const flags = {
  Austria: Austria,
  Belgium: Belgium,
  Croatia: Croatia,
  'Czech Republic': Czech_Republic,
  Denmark: Denmark,
  England: England,
  Finland: Finland,
  France: France,
  Germany: Germany,
  Hungary: Hungary,
  Italy: Italy,
  Netherlands: Netherlands,
  'North Macedonia': North_Macedonia,
  Poland: Poland,
  Portugal: Portugal,
  Russia: Russia,
  Scotland: Scotland,
  Slovakia: Slovakia,
  Spain: Spain,
  Sweden: Sweden,
  Switzerland: Switzerland,
  Turkey: Turkey,
  Ukraine: Ukraine,
  Wales: Wales,
};

import React from 'react';

export default function Flag(props) {
  const CountryFlag = flags[props.country];
  return <CountryFlag width={scale(25)} height={scale(25)} />;
}
