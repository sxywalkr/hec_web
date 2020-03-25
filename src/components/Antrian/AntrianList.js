import React from 'react';

import AntrianItem from './AntrianItem';

import { Feed, Table } from 'semantic-ui-react';

const AntrianList = ({
  authUser,
  antrians,
}) => (
    // <Feed>
    //   {antrians.map(antrian => (
    //     <AntrianItem
    //       authUser={authUser}
    //       key={antrian.uid}
    //       antrian={antrian}
    //     />
    //   ))}
    // </Feed>
    <Table compact celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell collapsing>Nomor Antrian</Table.HeaderCell>
          <Table.HeaderCell>Nama Antrian</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {antrians.map(antrian => (
          <AntrianItem
            authUser={authUser}
            key={antrian.uid}
            antrian={antrian}
          />
        ))}
      </Table.Body>
    </Table>
  );

export default AntrianList;
