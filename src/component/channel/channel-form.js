import React from 'react'

export default class ChannelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            channel: this.props.channel
            ? this.props.channel
            : {name: ''},
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSumbit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let {name, value} = e.target
        this.setState(({album: {[name]: value}}))
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onComplete(this.state.channel);
        Object.keys(this.state.channel).map(key => this.setState({[key]: ''}))
    }
    
    render() {
        return (
            <form className="channel-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="enter a favorite channel"
                    value={this.state.channel.name}
                    onChange={this.handleChange}/>

                <button type="submit">{this.props.buttonText}</button>
            </form>
        )
    }
}
