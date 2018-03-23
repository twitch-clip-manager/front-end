import React from 'react';
import Twitchimage from '../assets/twitcher.png';

class Image extends React.Component {
    render() {
        return (
            <div >
                <img src={Twitchimage}/>
            </div>
        );
    }
}

export default (Image);