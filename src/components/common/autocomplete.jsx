import React, { Component } from 'react';
import './headers/autocomplete.css'
export class Autocomplete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ''
        };
    }
    static defaultProperty={
        suggestions: []
    };

    onChange = (e) => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;
        
        const filteredSuggestions = suggestions.filter(
            (suggestion) => 
                suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
            );
    
        this.setState({
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
        userInput: e.currentTarget.value
        });
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
              activeSuggestion,
              filteredSuggestions,
              showSuggestions,
              userInput
            }
          } = this;
        let suggestionsListComponent;
        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                <ul class="suggestions">
                    {filteredSuggestions.map((suggestion, index) => {
                    
                    return (
                        <li  key={suggestion} onClick={onClick}>
                        {suggestion.name}
                        </li>
                    );
                    })}
                </ul>
                );
            } else {
                suggestionsListComponent = (
                <div class="no-suggestions">
                    <em>No suggestions!</em>
                </div>
                );
            }
        }
        return (
        <div class="topnav">
            <input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            placeholder="Eg. Cream"
            /><button><i class="fa fa-search"></i></button>
            {suggestionsListComponent}
        </div>);
    }
}
export default Autocomplete;