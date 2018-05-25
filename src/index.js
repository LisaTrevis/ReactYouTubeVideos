// Imported libraries do not need a relative file path:
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// Files I've created myself DO need a relative file path:
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDC0O0NP3IaD2dQesQWt-7J6IBVqjlQZH0';

// This is the App class, which is like a factory and returns some JSX:
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('renaissance festivals');
	}
	// As soon as an instance of the App class is created, React will try to render. However, it takes a second or two to get the data back, and in the mean time, the VideoDetail component tries to run. However, there is no data (props) yet, so we get an error that says "cannot read property id of undefined". (See video_detail for remainder of fix).

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			// this.setState({ videos: videos }); condensed with ES6:
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		// By replacing (term) => { this.videoSearch(term) } with _.debounce((term) => { this.videoSearch(term) }, 300) as the value for videoSearch, we're creating a throttle so that the state only updates every three seconds rather than every time the state of the search term input changes:
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
	// Multiline JSX is usually written inside of parens. Also, whenever we're passing in a variable (this.state.videos), we need to wrap it in curly braces. Also, passing in data like this is referred to as passing props in React. In this case, we're passing prop 'videos' to VideoList, where videos is our API data:
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	} 
}

// This instance of App takes the generated HTML and renders it to the DOM:
ReactDOM.render(<App />, document.querySelector('.container'))











