import React from 'react'
import {connect} from 'react-redux'
import ClipItem from '../clip/clip'
import ChannelForm from '../channel/channel-form'
import { channelFetchRequest, channelCreateRequest, channelDeleteRequest} from '../../action/channel-actions'

class Landing extends React.Component {
  componentWillMount() {
    this.props.fetchChannels()
  }
  
  render() {
    
    return (
      <div className="landing-container">
        <h1>Twitch Clip Manager</h1>
        {this.props.clips ?
          this.props.clips.map(clip => <ClipItem key={clip.tracking_id} clip={clip}/>) :
          undefined}

        <ChannelForm
          buttonText='save channel'
          onComplete={this.props.createChannel}/>

          {this.props.channels ?
            this.props.channels.map(channels =>
              <div key={channels._id}>
                <span onClick={() => this.props.deleteChannel(channel)}>x delete</span>
                {/* <span onClick={() => this.props.searchChannel(channel)}>>> search</span> */}
                <p>{channel.name}</p>
              </div>)
            :
            undefined}
      </div>
    )
  }
}

let mapStateToProps = state => ({
  clips: state.clips, channels: state.channels,
})
let mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(channelFetchRequest()),
  createChannel: channel => dispatch(channelCreateRequest()),
  deleteChannel: channel => dispatch(channelDeleteRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);