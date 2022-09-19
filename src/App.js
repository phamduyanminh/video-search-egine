import React from 'react';

import youtube from './apis/youtube';

import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

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

  onVideoSelected = (video) => {
    this.setState({selectedVideo: video})
    console.log('From the App ', video.id.videoId);
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList onVideoSelected={this.onVideoSelected} videos={this.state.videos}/>
            </div>    
          </div>
        </div>
      </div>
    );
  }
}

export default App;
