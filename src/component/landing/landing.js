import React from 'react'
import {connect} from 'react-redux'
import ClipItem from '../clip/clip'
import ChannelForm from '../channel/channel-form'
import { channelFetchRequest, channelCreateRequest, channelDeleteRequest} from '../../action/channel-actions'
import GameForm from '../game/game-form'
import { gameFetchRequest, gameCreateRequest, gameDeleteRequest} from '../../action/game-actions'
import AuthForm from '../auth/auth-form'
import {signupRequest, signinRequest} from '../../action/auth-actions'

class Landing extends React.Component {
  componentWillMount() {
    this.props.fetchChannels()
  }
  
  render() {

    console.log('__LANDING_PROPS__', this.props)
    let {params} = this.props.match
    let onComplete = params.auth === 'signin'
      ? this.props.signin
      : this.props.signup
    
    return (
      <div className="landing-container">
        <AuthForm
        auth={params.auth}
        onComplete={onComplete}/>

        <h1>Twitch Clip Manager</h1>
        {this.props.clips ?
          <ClipItem key={this.props.clips[0].tracking_id} clips={this.props.clips} thumbnails={this.props.thumbnails} />
          :
          undefined}

        <ChannelForm
          buttonText='save channel'
          onComplete={this.props.createChannel}/>

          {this.props.channels ?
            this.props.channels.map(channel =>
              <div key={channel}>
                <span onClick={() => this.props.deleteChannel(channel)}>x delete</span>
                {/* <span onClick={() => this.props.searchChannel(channel)}>>> search</span> */}
                <p>{channel}</p>
              </div>)
            :
            undefined}

        <GameForm
          buttonText='save game'
          onComplete={this.props.createGame}/>

          {this.props.games ?
            this.props.games.map(game =>
              <div key={game}>
                <span onClick={() => this.props.deleteChannel(game)}>x delete</span>
                {/* <span onClick={() => this.props.searchChannel(channel)}>>> search</span> */}
                <p>{game}</p>
              </div>)
            :
            undefined}
      </div>
    )
  }
}

let mapStateToProps = state => ({
  clips: state.clips,
  channels: state.channels,
  games: state.games,
  sources: state.sources,
  thumbnails: state.thumbnails,
})

let mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(channelFetchRequest()),
  createChannel: channel => dispatch(channelCreateRequest()),
  deleteChannel: channel => dispatch(channelDeleteRequest()),
  fetchGames: () => dispatch(gameFetchRequest()),
  createGame: game => dispatch(gameCreateRequest()),
  deleteGame: game => dispatch(gameDeleteRequest()),
  signup: user => dispatch(signupRequest(user)),
  signin: user => dispatch(signinRequest(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);