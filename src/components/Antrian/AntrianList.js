import React from 'react';

import AntrianItem from './AntrianItem';

import { Feed } from 'semantic-ui-react';

const AntrianList = ({
  authUser,
  antrians,
}) => (
  <Feed>
    {antrians.map(antrian => (
      <AntrianItem
        authUser={authUser}
        key={antrian.uid}
        antrian={antrian}
      />
    ))}
  </Feed>
);

export default AntrianList;
