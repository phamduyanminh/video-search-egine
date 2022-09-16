import React from 'react';

import youtube from './apis/youtube';

import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

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
        <VideoList videos={this.state.videos}></VideoList>
      </div>
    );
  }
}

export default App;
