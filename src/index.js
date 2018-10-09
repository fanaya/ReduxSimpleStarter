import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBDh7OMkJtLczWWu9OkXlgGMaIwNN0NGBc'; // Youtube Data API v3 - browser key



// create a new component. This component should produce some HTML
// This is a functional component
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch( {key: API_KEY, term: 'surfboards'}, (videos) => {
            "use strict";
            this.setState({ videos });
        });
    }


    render(){

        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div> // JSX
        );
    }
};


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));