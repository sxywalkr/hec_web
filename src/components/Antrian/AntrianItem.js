import React, { Component } from 'react';
import { distanceInWordsToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { Feed, Icon, Form, Button, Header, Grid, Card, Table } from 'semantic-ui-react';

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
      // <Feed.Event>
      //   <Feed.Label>
      //     <Header as='h4'>{antrian.antrianNomor}</Header>
      //   </Feed.Label>
      //   <Feed.Content>
      //     <Feed.Summary>
      //       Antrian Pasien Nomor {antrian.antrianNomor} atas nama <Header as='h4'>{antrian.antrianUserNama}</Header>
      //       <Feed.User>
      //       </Feed.User>
      //     </Feed.Summary>
      //   </Feed.Content>
      // </Feed.Event>
      // <Grid celled>
      //   <Grid.Row>
      //     <Grid.Column width={2}>
      //       <Header as='h1'>{antrian.antrianNomor}</Header>
      //     </Grid.Column>
      //     <Grid.Column width={14}>
      //       <Header as='h1'>{antrian.antrianUserNama}</Header>
      //     </Grid.Column>
      //   </Grid.Row>
      // </Grid>
      // <Card
      //   header={antrian.antrianNomor}
      //   meta={antrian.antrianUserNama}
      // // description='Jenny is a student studying Media Management at the New School'
      // />
      // <Table celled>
        // <Table.Body>
          <Table.Row>
            <Table.Cell>{antrian.antrianNomor}</Table.Cell>
            <Table.Cell>{antrian.antrianUserNama}</Table.Cell>
          </Table.Row>
        // </Table.Body>
      // </Table>
    );
  }
}

export default AntrianItem;
