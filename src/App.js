import React from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';

class App extends React.Component {
  state = {videos: []};

  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get(
      '/search',
      {
        params: {
          q: term,
        }
      }
    );
    console.log(response.data.items);
    this.setState({videos: response.data.items});
  };

  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        I have {this.state.videos.length}
      </div>
    );
  }
}

export default App;
