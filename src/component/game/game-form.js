import React from 'react'

export default class GameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            game: this.props.game
            ? this.props.game
            : {name: ''},
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSumbit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let {name, value} = e.target
        this.setState(({game: {[name]: value}}))
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onComplete(this.state.game);
    }
    
    render() {
        return (
            <form className="game-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="game"
                    placeholder="favorite game"
                    value={this.state.game.name}
                    onChange={this.handleChange}/>

                <button type="submit">{this.props.buttonText}</button>
            </form>
        )
    }
}
