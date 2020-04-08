import React, { Component } from 'react';
import Sound from 'react-sound';

import SoundList from '../AssetSound/AntrianSoundList.js';
import { Feed } from 'semantic-ui-react';

class AntrianSoundController extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      console.log(this.props)
  }

  render() {
      const { nomorAntrian } = this.props;
    return (
        <Feed>
            {nomorAntrian === 21 && <Sound url={SoundList[0].url} playStatus='PLAYING' />}
        </Feed>
        
    );
  }
}

export default AntrianSoundController;
