import React from 'react';
import {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    }


    return(
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                    placeholder='Please enter your search here'
                    type="text" 
                    value={term}
                    onChange={onInputChange}
                    >

                    </input>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;

//AIzaSyBfO3EOSVJ1inhMys2PuC6M1ggVIHbDYn0