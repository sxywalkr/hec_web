import React, { Component } from 'react';
import { distanceInWordsToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { Feed, Icon, Form, Button, Header, Grid, Card, Table } from 'semantic-ui-react';
// import Sound from 'react-sound';
// import ListSound from '../AssetSound/AntrianSoundList.js';
import AntrianSound from '../AssetSound/AntrianSoundController.js';

export const TimeAgo = ({ time }) => (
  <time>{distanceInWordsToNow(time)} ago</time>
);

class AntrianItem extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { authUser, antrian } = this.props;

    return (
      <Table.Row>
        <Table.Cell>{antrian.antrianNomor}</Table.Cell>
        <Table.Cell>{antrian.antrianUserNama} {antrian.antrianStatus && '| Sementara di periksa'} </Table.Cell>
        {!!antrian.antrianStatus &&
          <AntrianSound nomorAntrian={antrian.antrianNomor} />
        }
      </Table.Row>
    );
  }
}

export default AntrianItem;
