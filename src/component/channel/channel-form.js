import React from 'react'
import {connect} from 'react-redux'
import {channelListSet} from '../../action/channel-actions';

class ChannelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            channel: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let {name, value} = e.target
        this.setState(({[name]: value}))
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.channel)
        this.props.channelListSet(this.state.channel)
        // Object.keys(this.state.channel).map(key => this.setState({[key]: ''}))
    }
    
    render() {
        return (
            <form className="channel-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="channel"
                    placeholder="enter a favorite channel"
                    value={this.state.channel}
                    onChange={this.handleChange}/>

                <button type="submit">{this.props.buttonText}</button>
            </form>
        )
    }
}

let mapStateToProps = () => ({})

let mapDispatchToProps = dispatch => ({
  channelListSet: (channel) => dispatch(channelListSet(channel)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);