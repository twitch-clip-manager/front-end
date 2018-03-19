import React from 'react'
import ReactDom from 'react-dom'
import superagent from 'superagent'
import {connect} from 'react-redux'
import {getClipsRequest} from '../../action/actions'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channel: '',
      game: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    if (e.target.name === 'input-game') this.setState({game: e.target.value})
    if (e.target.name === 'input-channel') this.setState({channel: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.getClips(this.state)
  }

  render() {
    // console.log(this.props)
    return (
      <form
        className={this.props.search_error ? "form-error search-form" : "search-form"}
        onSubmit={this.handleSubmit}>

        <input
          type="text"
          name="input-game"
          value={this.state.game}
          onChange={this.handleChange}
          placeholder="dota"/>
        
        <input
          type="text"
          name="input-channel"
          value={this.state.channel}
          onChange={this.handleChange}
          placeholder="the doc"
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