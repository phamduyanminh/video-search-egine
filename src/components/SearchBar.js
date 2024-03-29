import React from 'react';
import {useState} from 'react';

class SearchBar extends React.Component{
    state = {term: ''};

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        placeholder='Please enter your search here'
                        type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        >
    
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

//AIzaSyBfO3EOSVJ1inhMys2PuC6M1ggVIHbDYn0