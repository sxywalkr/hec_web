import React, { Component } from 'react';

import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import { format } from 'date-fns';
import AntrianList from './AntrianList';

import {
  Card,
  Message,
  Button,
  Loader,
  Header,
} from 'semantic-ui-react';

class Antrians extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      loading: false,
      messages: [],
      limit: 5,
    };
  }

  componentDidMount() {
    this.onListenForMessages();
  }

  onListenForMessages = () => {
    this.setState({ loading: true });

    this.props.firebase
      .db
      // .ref('hecAntrian/indexes/' + format(new Date('2020-03-21', 'yyyy-MM-dd')) + '/detail')
      .ref('hecAntrian/indexes/2020-03-21/detail')
      .on('value', snapshot => {
        const snapObject = snapshot.val();
        // console.log(snapObject, format(new Date('2020-03-21', 'yyyy-MM-dd')))
        if (snapObject) {
          const antrianList = Object.keys(snapObject).map(key => ({
            ...snapObject[key],
            uid: key,
          }));

          this.setState({
            antrians: antrianList,
            loading: false,
          });
        } else {
          this.setState({ antrians: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    // this.props.firebase.ref('hecAntrian').off();
  }

  render() {
    const { antrians, loading } = this.state;

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <Card fluid={true}>
            <Card.Content>
              <Card.Description>
                <Header as='h1' textAlign='center' >Klinik Mata Hasanuddin</Header>
                <Header as='h3' textAlign='center' >Antrian Tanggal {format(new Date(), 'D MMM YYYY')}</Header>

                {loading && <Loader active inline="centered" />}
                {antrians && (
                  <AntrianList
                    authUser={authUser}
                    antrians={antrians}
                  />
                )}

                {!loading && !antrians && (
                  <Message info>
                    <p>Tidak ada antrians ...</p>
                  </Message>
                )}

                
              </Card.Description>
            </Card.Content>
          </Card>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(Antrians);
