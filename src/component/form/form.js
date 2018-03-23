import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import {connect} from 'react-redux';
import {getClipsRequest} from '../../action/actions';
import Autocomplete from 'react-autocomplete';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: '',
            game: '',
            searchGameResults: [],
            searchChannelResults: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAutoComplete = this.handleAutoComplete.bind(this);
        this.searchByGame = this.searchByGame.bind(this);
        this.searchByChannel = this.searchByChannel.bind(this);
        this.parseGameResults = this.parseGameResults.bind(this);
        this.parseChannelResults = this.parseChannelResults.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getClips(this.state);
    }

    searchByGame(game) {
        return superagent.get(`https://api.twitch.tv/kraken/search/games?query=${game}`)
            .set('Client-ID', __CLIENT_ID__)
            .set('Accept', 'application/vnd.twitchtv.v5+json')
            .then(res => res.body.games);
    }

    searchByChannel(channel) {
        return superagent.get(`https://api.twitch.tv/kraken/search/channels?query=${channel}`)
            .set('Client-ID', __CLIENT_ID__)
            .set('Accept', 'application/vnd.twitchtv.v5+json')
            .then(res => res.body.channels);
    }

    handleAutoComplete(e) {

    // document.getElementsByClassName("populated-field").nextSibling.setAttribute("style", "height: 200px;");

        const { name, value } = e.target;
        if (name === 'game') {
            this.setState({ game: value, channel:'' }, () => {
                return this.searchByGame(this.state.game)
                    .then(this.parseGameResults)
                    .then(res => this.setState({searchGameResults: res }));
            });
        } else {
            this.setState({ channel: value, game: '' }, () => {
                return this.searchByChannel(this.state.channel)
                    .then(this.parseChannelResults)
                    .then(res => this.setState({searchChannelResults: res }));
            });
        }
    }
    parseGameResults(searchResults) {
        return searchResults.map((result, i ) => {
            return {
                label: result.name,
                logo: result.logo.small,
            };
        });
    }
    parseChannelResults(searchResults) {
        return searchResults.map((result, i ) => {
            return {
                label: result.display_name,
            };
        });
    }
    render() {
        const renderItem = (item, highlighted) => {
            return <div key={item.label} className='autocomplete-item'>
                {item.label}
            </div>;
        };
        const renderGameInput = (props) => {
            return <input
                {...props}
                className='populated-field'
                placeholder="game"
                name='game'
            />;
        };
        const renderChannelInput = (props) => {
            return <input
                {...props}
                className='populated-field'
                placeholder="channel"
                name='channel'
            />;
        };

        const menuStyling = {
            borderRadius: '3px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '2px 0',
            fontSize: '90%',
            position: 'fixed',
            overflow: 'auto',
            maxHeight: '135px',
        };
        return (
      
            <form
                className={this.props.search_error ? 'form-error search-form' : 'search-form'}
                onSubmit={this.handleSubmit}>

                <Autocomplete 
                    className="autocomplete-game"
                    value={this.state.game}
                    name="game"
                    onChange={this.handleAutoComplete}
                    items={this.state.searchGameResults}
                    getItemValue={item=> item.label}
                    renderItem={renderItem}
                    renderInput={renderGameInput}
                    menuStyle={menuStyling}
                    onSelect={value => {
                        return this.setState({game: value});
                    }}

                />
        
                <Autocomplete 
                    className="autocomplete-channel"
                    value={this.state.channel}
                    name="channel"
                    onChange={this.handleAutoComplete}
                    items={this.state.searchChannelResults}
                    getItemValue={item=> item.label}
                    renderItem={renderItem}
                    renderInput={renderChannelInput}
                    menuStyle={menuStyling}
                    onSelect={value => {
                        return this.setState({channel: value});
                    }}
          
                />
                <button id="submitbutton" type="submit">search</button>


            </form>
        );
    }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
    getClips: (state) => dispatch(getClipsRequest(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);