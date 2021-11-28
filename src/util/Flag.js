import Barnsley from '../../assets/clubs/barnsley.png';
import Birmingham_City from '../../assets/clubs/birmingham_city.png';
import Blackburn_Rovers from '../../assets/clubs/blackburn_rovers.png';
import Blackpool from '../../assets/clubs/blackpool.png';
import Bournemouth from '../../assets/clubs/bournemouth.png';
import Bristol_City from '../../assets/clubs/bristol_city.png';
import Cardiff_City from '../../assets/clubs/cardiff_city.png';
import Coventry_City from '../../assets/clubs/coventry_city.png';
import Derby_County from '../../assets/clubs/derby_county.png';
import Fulham from '../../assets/clubs/fulham.png';
import Huddersfield_Town from '../../assets/clubs/huddersfield_town.png';
import Hull_City from '../../assets/clubs/hull_city.png';
import Luton_Town from '../../assets/clubs/luton_town.png';
import Middlesborough from '../../assets/clubs/middlesbrough.png';
import Millwall from '../../assets/clubs/millwall.png';
import Nottingham_Forest from '../../assets/clubs/nottingham_forest.png';
import Peterborough_United from '../../assets/clubs/peterborough_united.png';
import Preston_North_End from '../../assets/clubs/preston_north_end.png';
import Queens_Park_Rangers from '../../assets/clubs/queens_park_rangers.png';
import Reading from '../../assets/clubs/reading.png';
import Sheffield_United from '../../assets/clubs/sheffield_united.png';
import Stoke_City from '../../assets/clubs/stoke_city.png';
import Swansea_City from '../../assets/clubs/swansea_city.png';
import West_Bromwich_Albion from '../../assets/clubs/west_bromwich_albion.png';

const flags = {
  Barnsley: Barnsley,
  'Birmingham City': Birmingham_City,
  'Blackburn Rovers': Blackburn_Rovers,
  Blackpool: Blackpool,
  Bournemouth: Bournemouth,
  'Bristol City': Bristol_City,
  'Cardiff City': Cardiff_City,
  'Coventry City': Coventry_City,
  'Derby County': Derby_County,
  Fulham: Fulham,
  'Huddersfield Town': Huddersfield_Town,
  'Hull City': Hull_City,
  'Luton Town': Luton_Town,
  Middlesborough: Middlesborough,
  Millwall: Millwall,
  'Nottingham Forest': Nottingham_Forest,
  'Peterborough United': Peterborough_United,
  'Preston North End': Preston_North_End,
  'Queens Park Rangers': Queens_Park_Rangers,
  Reading: Reading,
  'Sheffield United': Sheffield_United,
  'Stoke City': Stoke_City,
  'Swansea City': Swansea_City,
  'West Bromwich Albion': West_Bromwich_Albion,
};

import React from 'react';
import {ImageBackground} from 'react-native';

export default function Flag(props) {
  return (
    <ImageBackground
      source={flags[props.country]}
      style={{width: props.width, height: props.height}}
      // width={props.width}
      // height={props.height}
    />
  );
  // const CountryFlag = flags[props.country];
  // return <CountryFlag width={props.width} height={props.height} />;
}
