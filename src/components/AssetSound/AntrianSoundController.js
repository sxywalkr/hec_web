import React, { Component } from 'react';
import Sound from 'react-sound';

import SoundApp from '../AssetSound/AntrianSoundApp.js';
import { Feed } from 'semantic-ui-react';

class AntrianSoundController extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      console.log(this.props.nomorAntrian)
  }

  render() {
      const { nomorAntrian } = this.props;
    return (
        <Feed>
            {nomorAntrian === 1 && <SoundApp nomor={[1]} />}
            {nomorAntrian === 2 && <SoundApp nomor={[2]} />}
            {nomorAntrian === 3 && <SoundApp nomor={[3]} />}
            {nomorAntrian === 4 && <SoundApp nomor={[4]} />}
            {nomorAntrian === 5 && <SoundApp nomor={[5]} />}
            {nomorAntrian === 6 && <SoundApp nomor={[6]} />}
            {nomorAntrian === 7 && <SoundApp nomor={[7]} />}
            {nomorAntrian === 8 && <SoundApp nomor={[8]} />}
            {nomorAntrian === 9 && <SoundApp nomor={[9]} />}
            {nomorAntrian === 10 && <SoundApp nomor={[10]} />}
            {nomorAntrian === 11 && <SoundApp nomor={[11]} />}
            {nomorAntrian === 12 && <SoundApp nomor={[2, 'belas']} />}
            {nomorAntrian === 13 && <SoundApp nomor={[3, 'belas']} />}
            {nomorAntrian === 14 && <SoundApp nomor={[4, 'belas']} />}
            {nomorAntrian === 15 && <SoundApp nomor={[5, 'belas']} />}
            {nomorAntrian === 16 && <SoundApp nomor={[6, 'belas']} />}
            {nomorAntrian === 17 && <SoundApp nomor={[7, 'belas']} />}
            {nomorAntrian === 18 && <SoundApp nomor={[8, 'belas']} />}
            {nomorAntrian === 19 && <SoundApp nomor={[9, 'belas']} />}
            {nomorAntrian === 20 && <SoundApp nomor={[2, 'puluh']} />}
            {nomorAntrian === 21 && <SoundApp nomor={[2, 'puluh', 1]} />}
            {nomorAntrian === 22 && <SoundApp nomor={[2, 'puluh', 2]} />}
            {nomorAntrian === 23 && <SoundApp nomor={[2, 'puluh', 3]} />}
            {nomorAntrian === 24 && <SoundApp nomor={[2, 'puluh', 4]} />}
            {nomorAntrian === 25 && <SoundApp nomor={[2, 'puluh', 5]} />}
            {nomorAntrian === 26 && <SoundApp nomor={[2, 'puluh', 6]} />}
            {nomorAntrian === 27 && <SoundApp nomor={[2, 'puluh', 7]} />}
            {nomorAntrian === 28 && <SoundApp nomor={[2, 'puluh', 8]} />}
            {nomorAntrian === 29 && <SoundApp nomor={[2, 'puluh', 9]} />}
            {nomorAntrian === 30 && <SoundApp nomor={[2, 'puluh']} />}
            {nomorAntrian === 31 && <SoundApp nomor={[3, 'puluh', 1]} />}
            {nomorAntrian === 32 && <SoundApp nomor={[3, 'puluh', 2]} />}
            {nomorAntrian === 33 && <SoundApp nomor={[3, 'puluh', 3]} />}
            {nomorAntrian === 34 && <SoundApp nomor={[3, 'puluh', 4]} />}
            {nomorAntrian === 35 && <SoundApp nomor={[3, 'puluh', 5]} />}
            {nomorAntrian === 36 && <SoundApp nomor={[3, 'puluh', 6]} />}
            {nomorAntrian === 37 && <SoundApp nomor={[3, 'puluh', 7]} />}
            {nomorAntrian === 38 && <SoundApp nomor={[3, 'puluh', 8]} />}
            {nomorAntrian === 39 && <SoundApp nomor={[3, 'puluh', 9]} />}
            {nomorAntrian === 40 && <SoundApp nomor={[4, 'puluh']} />}
            {nomorAntrian === 41 && <SoundApp nomor={[4, 'puluh', 1]} />}
            {nomorAntrian === 42 && <SoundApp nomor={[4, 'puluh', 2]} />}
            {nomorAntrian === 43 && <SoundApp nomor={[4, 'puluh', 3]} />}
            {nomorAntrian === 44 && <SoundApp nomor={[4, 'puluh', 4]} />}
            {nomorAntrian === 45 && <SoundApp nomor={[4, 'puluh', 5]} />}
            {nomorAntrian === 46 && <SoundApp nomor={[4, 'puluh', 6]} />}
            {nomorAntrian === 47 && <SoundApp nomor={[4, 'puluh', 7]} />}
            {nomorAntrian === 48 && <SoundApp nomor={[4, 'puluh', 8]} />}
            {nomorAntrian === 49 && <SoundApp nomor={[4, 'puluh', 9]} />}
            {nomorAntrian === 50 && <SoundApp nomor={[5, 'puluh']} />}
            {nomorAntrian === 51 && <SoundApp nomor={[5, 'puluh', 1]} />}
            {nomorAntrian === 52 && <SoundApp nomor={[5, 'puluh', 2]} />}
            {nomorAntrian === 53 && <SoundApp nomor={[5, 'puluh', 3]} />}
            {nomorAntrian === 54 && <SoundApp nomor={[5, 'puluh', 4]} />}
            {nomorAntrian === 55 && <SoundApp nomor={[5, 'puluh', 5]} />}
            {nomorAntrian === 56 && <SoundApp nomor={[5, 'puluh', 6]} />}
            {nomorAntrian === 57 && <SoundApp nomor={[5, 'puluh', 7]} />}
            {nomorAntrian === 58 && <SoundApp nomor={[5, 'puluh', 8]} />}
            {nomorAntrian === 59 && <SoundApp nomor={[5, 'puluh', 9]} />}
            {nomorAntrian === 60 && <SoundApp nomor={[6, 'puluh']} />}
            {nomorAntrian === 61 && <SoundApp nomor={[6, 'puluh', 1]} />}
            {nomorAntrian === 62 && <SoundApp nomor={[6, 'puluh', 2]} />}
            {nomorAntrian === 63 && <SoundApp nomor={[6, 'puluh', 3]} />}
            {nomorAntrian === 64 && <SoundApp nomor={[6, 'puluh', 4]} />}
            {nomorAntrian === 65 && <SoundApp nomor={[6, 'puluh', 5]} />}
            {nomorAntrian === 66 && <SoundApp nomor={[6, 'puluh', 6]} />}
            {nomorAntrian === 67 && <SoundApp nomor={[6, 'puluh', 7]} />}
            {nomorAntrian === 68 && <SoundApp nomor={[6, 'puluh', 8]} />}
            {nomorAntrian === 69 && <SoundApp nomor={[6, 'puluh', 9]} />}
            {nomorAntrian === 70 && <SoundApp nomor={[7, 'puluh']} />}
            {nomorAntrian === 71 && <SoundApp nomor={[7, 'puluh', 1]} />}
            {nomorAntrian === 72 && <SoundApp nomor={[7, 'puluh', 2]} />}
            {nomorAntrian === 73 && <SoundApp nomor={[7, 'puluh', 3]} />}
            {nomorAntrian === 74 && <SoundApp nomor={[7, 'puluh', 4]} />}
            {nomorAntrian === 75 && <SoundApp nomor={[7, 'puluh', 5]} />}
            {nomorAntrian === 76 && <SoundApp nomor={[7, 'puluh', 6]} />}
            {nomorAntrian === 77 && <SoundApp nomor={[7, 'puluh', 7]} />}
            {nomorAntrian === 78 && <SoundApp nomor={[7, 'puluh', 8]} />}
            {nomorAntrian === 79 && <SoundApp nomor={[7, 'puluh', 9]} />}
            {nomorAntrian === 80 && <SoundApp nomor={[8, 'puluh']} />}
            {nomorAntrian === 81 && <SoundApp nomor={[8, 'puluh', 1]} />}
            {nomorAntrian === 82 && <SoundApp nomor={[8, 'puluh', 2]} />}
            {nomorAntrian === 83 && <SoundApp nomor={[8, 'puluh', 3]} />}
            {nomorAntrian === 84 && <SoundApp nomor={[8, 'puluh', 4]} />}
            {nomorAntrian === 85 && <SoundApp nomor={[8, 'puluh', 5]} />}
            {nomorAntrian === 86 && <SoundApp nomor={[8, 'puluh', 6]} />}
            {nomorAntrian === 87 && <SoundApp nomor={[8, 'puluh', 7]} />}
            {nomorAntrian === 88 && <SoundApp nomor={[8, 'puluh', 8]} />}
            {nomorAntrian === 89 && <SoundApp nomor={[8, 'puluh', 9]} />}
            {nomorAntrian === 90 && <SoundApp nomor={[9, 'puluh']} />}
            {nomorAntrian === 91 && <SoundApp nomor={[9, 'puluh', 1]} />}
            {nomorAntrian === 92 && <SoundApp nomor={[9, 'puluh', 2]} />}
            {nomorAntrian === 93 && <SoundApp nomor={[9, 'puluh', 3]} />}
            {nomorAntrian === 94 && <SoundApp nomor={[9, 'puluh', 4]} />}
            {nomorAntrian === 95 && <SoundApp nomor={[9, 'puluh', 5]} />}
            {nomorAntrian === 96 && <SoundApp nomor={[9, 'puluh', 6]} />}
            {nomorAntrian === 97 && <SoundApp nomor={[9, 'puluh', 7]} />}
            {nomorAntrian === 98 && <SoundApp nomor={[9, 'puluh', 8]} />}
            {nomorAntrian === 99 && <SoundApp nomor={[9, 'puluh', 9]} />}
            {nomorAntrian === 100 && <SoundApp nomor={[100]} />}
            
        </Feed>
        
    );
  }
}

export default AntrianSoundController;
