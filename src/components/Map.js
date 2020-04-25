import React from 'react';
import data from '../data/data';

const Map = ({ routes }) => {
  const paths = routes.map(({ airline, src, dest }) => {
    const sourceAirport = data.airports.find(airport => airport.code === src);
    const destAirport = data.airports.find(airport => airport.code === dest);
    const id = airline + src + dest;

    return (
      <g key={id}>
        <circle
          className='source'
          cx={sourceAirport.long}
          cy={sourceAirport.lat}
        >
          <title></title>
        </circle>
        <circle
          className='destination'
          cx={destAirport.long}
          cy={destAirport.lat}
        >
          <title></title>
        </circle>
        <path
          d={`M${sourceAirport.long} ${sourceAirport.lat} L ${destAirport.long} ${destAirport.lat}`}
        />
      </g>
    );
  });

  return (
    <svg className='map' viewBox='-180 -90 360 180'>
      <g transform='scale(1 -1)'>
        <image
          xlinkHref='equirectangular_world.jpg'
          href='equirectangular_world.jpg'
          x='-180'
          y='-90'
          height='100%'
          width='100%'
          transform='scale(1 -1)'
        />

        {paths}
      </g>
    </svg>
  );
};

export default Map;
