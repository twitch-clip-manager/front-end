import React from 'react'
import ReactDom from 'react-dom'
import superagent from 'superagent'
import {connect} from 'react-redux'
import {getClipsRequest} from '../../action/actions'
import Autocomplete from 'react-autocomplete'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channel: '',
      game: '',
      searchGameResults: [],
      searchChannelResults: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAutoComplete = this.handleAutoComplete.bind(this)
    this.searchByGame = this.searchByGame.bind(this)
    this.parseResults = this.parseResults.bind(this)
  }

  handleChange(e) {
    console.log(e.target.name);
    
    if (e.target.name === 'input-game') this.setState({game: e.target.value})
    if (e.target.name === 'input-channel') this.setState({channel: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.getClips(this.state)
  }

  searchByGame(game) {
    return superagent.get(`https://api.twitch.tv/kraken/search/games?query=${game}`)
      .set('Client-ID', __CLIENT_ID__)
      .set('Accept', 'application/vnd.twitchtv.v5+json')
      .then(res => res.body.games)
  }

  handleAutoComplete(e) {
    const { name, value } = e.target;
    if (name === 'game') {
      this.setState({ game: value }, () => {
        return this.searchByGame(this.state.game)
          .then(this.parseResults)
          .then(res => this.setState({searchGameResults: res }))
      })
    } else {
      this.setState({ channel: value }, () => {
        return this.searchByChannel(this.state.game)
        .then(console.log)
      })
    }
    // this.setState({game: e.target.value}, () => {
    //   return SEARCH_BY_TITLE(this.state.game)
    //     .then(this.parseResults)
    // })
  }
  parseResults(searchResults) {
    return searchResults.map((result, i ) => {
      return {
        label: result.name,
        logo: result.logo.small,
      }
    })
  }

  render() {
    const renderItem = (item, highlighted) => {
      return <div key={item.id} className='autocomplete=item'>
        {item.label}
      </div>
    }
    const renderGameInput = (props) => {
      return <input
      {...props}
      className='populated-field'
      placeholder="game"
      name='game'
      />
    }
    const renderChannelInput = (props) => {
      return <input
      {...props}
      className='populated-field'
      placeholder="channel"
      name='channel'
      />
    }

    const menuStyling = {
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '2px 0',
      fontSize: '90%',
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '50%',
    }
    return (
      
      <form
        className={this.props.search_error ? "form-error search-form" : "search-form"}
        onSubmit={this.handleSubmit}>

        {/* <input
          type="text"
          name="input-game"
          value={this.state.game}
          onChange={(this.handleChange)}
          placeholder="GAME"/>
        
        <input
          type="text"
          name="input-channel"
          value={this.state.channel}
          onChange={this.handleChange}
          placeholder="CHANNEL"
          /> */}

        <Autocomplete 
          value={this.state.game}
          onChange={this.handleAutoComplete}
          items={this.state.searchGameResults}
          getItemValue={item=> item.label}
          renderItem={renderItem}
          renderInput={renderGameInput}
          menuStyle={menuStyling}
          onSelect={value => {
            return this.setState({game: value})
          }}

        />
        
        <Autocomplete 
          value={this.state.channel}
          onChange={this.handleChange}
          name="channel"
          items={[
            {label: 'apple'},
            {label: 'orange'},
            {label: 'banana'},
          ]}
          getItemValue={item=> item.label}
          renderItem={renderItem}
          renderInput={renderChannelInput}
          menuStyle={menuStyling}
          onSelect={value => {
            return this.setState({channel: value})
          }}
          
        />
        <button type="submit">Search</button>

      </form>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = dispatch => ({
  getClips: (state) => dispatch(getClipsRequest(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);