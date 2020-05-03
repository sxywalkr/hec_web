import React, { Component } from 'react';
import Sound from 'react-sound';

import SoundList from '../AssetSound/AntrianSoundList.js';
import { Feed } from 'semantic-ui-react';

class AntrianSoundApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next0: true,
            next1: false,
            next2: false,
        }
    }

    componentDidMount() {
        console.log('nomor: ', this.props.nomor)
    }

    render() {
        const { nomor } = this.props;
        return (
            <Feed>
                {/* array1 */}
                {this.state.next0 === true && nomor[0] === 1 &&
                    <div>
                        <Sound url={SoundList[1].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next0: false, next1: true })} />
                    </div>
                }
                {this.state.next0 === true && nomor[0] === 2 &&
                    <div>
                        <Sound url={SoundList[2].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next0: false, next1: true })} />
                    </div>
                }
                {this.state.next0 === true && nomor[0] === 3 &&
                    <div>
                        <Sound url={SoundList[3].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next0: false, next1: true })} />
                    </div>
                }
                {this.state.next0 === true && nomor[0] === 4 &&
                    <div>
                        <Sound url={SoundList[4].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next0: false, next1: true })} />
                    </div>
                }
                {this.state.next0 === true && nomor[0] === 5 &&
                    <div>
                        <Sound url={SoundList[5].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next0: false, next1: true })} />
                    </div>
                }
                {this.state.next0 === true && nomor[0] === 6 &&
                    <div>
                        <Sound url={SoundList[6].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next0: false, next1: true })} />
                    </div>
                }
                {this.state.next0 === true && nomor[0] === 7 &&
                    <div>
                        <Sound url={SoundList[7].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next0: false, next1: true })} />
                    </div>
                }
                {this.state.next0 === true && nomor[0] === 8 &&
                    <div>
                        <Sound url={SoundList[8].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next0: false, next1: true })} />
                    </div>
                }
                {this.state.next0 === true && nomor[0] === 9 &&
                    <div>
                        <Sound url={SoundList[9].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next0: false, next1: true })} />
                    </div>
                }
                {this.state.next0 === true && nomor[0] === 10 &&
                    <div>
                        <Sound url={SoundList[10].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next0: false, next1: true })} />
                    </div>
                }
                {this.state.next0 === true && nomor[0] === 11 &&
                    <div>
                        <Sound url={SoundList[11].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next0: false, next1: true })} />
                    </div>
                }
                {this.state.next0 === true && nomor[0] === 100 &&
                    <div>
                        <Sound url={SoundList[12].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next0: false, next1: true })} />
                    </div>
                }

                {/* array2 */}
                {this.state.next1 === true && nomor[1] === 'belas' &&
                    <div>
                        <Sound url={SoundList[13].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next1: false, next2: true })} />
                    </div>
                }
                {this.state.next1 === true && nomor[1] === 'puluh' &&
                    <div>
                        <Sound url={SoundList[14].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next1: false, next2: true })} />
                    </div>
                }

                {/* array3 */}
                {this.state.next2 === true && nomor[2] === 1 &&
                    <div>
                        <Sound url={SoundList[1].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next2: false })} />
                    </div>
                }
                {this.state.next2 === true && nomor[2] === 2 &&
                    <div>
                        <Sound url={SoundList[2].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next2: false })} />
                    </div>
                }
                {this.state.next2 === true && nomor[2] === 3 &&
                    <div>
                        <Sound url={SoundList[3].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next2: false })} />
                    </div>
                }
                {this.state.next2 === true && nomor[2] === 4 &&
                    <div>
                        <Sound url={SoundList[4].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next2: false })} />
                    </div>
                }
                {this.state.next2 === true && nomor[2] === 5 &&
                    <div>
                        <Sound url={SoundList[5].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next2: false })} />
                    </div>
                }
                {this.state.next2 === true && nomor[2] === 6 &&
                    <div>
                        <Sound url={SoundList[6].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next2: false })} />
                    </div>
                }
                {this.state.next2 === true && nomor[2] === 7 &&
                    <div>
                        <Sound url={SoundList[7].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next2: false })} />
                    </div>
                }
                {this.state.next2 === true && nomor[2] === 8 &&
                    <div>
                        <Sound url={SoundList[8].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next2: false })} />
                    </div>
                }
                {this.state.next2 === true && nomor[2] === 9 &&
                    <div>
                        <Sound url={SoundList[9].url} playStatus='PLAYING' onFinishedPlaying={() => this.setState({ next2: false })} />
                    </div>
                }
            </Feed>
        );
    }
}

export default AntrianSoundApp;
