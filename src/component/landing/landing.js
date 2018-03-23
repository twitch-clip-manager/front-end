import React from 'react';
import {connect} from 'react-redux';
import ClipItem from '../clip/clip';
import Image from '../image';


class Landing extends React.Component {


    render() {
        return (
            <div className="landing-container">
      
                <h1>Twitcher</h1>
                {this.props.clips ?
                    <ClipItem key={this.props.clips[0].tracking_id} clips={this.props.clips} thumbnails={this.props.thumbnails} />
                    :
                    undefined}
            </div>
        );
    }
}

let mapStateToProps = state => ({
    clips: state.clips,
    thumbnails: state.thumbnails,
});


export default connect(mapStateToProps)(Landing);