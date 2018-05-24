// Imported libraries do not need a relative file path:
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// Files I've created myself DO need a relative file path:
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDC0O0NP3IaD2dQesQWt-7J6IBVqjlQZH0';

// This is the App class, which is like a factory and returns some JSX:
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			// this.setState({ videos: videos }); condensed with ES6:
			this.setState({ videos });
		});
	}

	render() {
	// Multiline JSX is usually written inside of parens. Also, since we're passing in a variable (this.state.videos), we need to wrap it in curly braces. Also, passing in data like this is referred to as passing props in React. In this case, we're passing prop 'videos' to VideoList, where videos is our API data:
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// This instance of App takes the generated HTML and renders it to the DOM:
ReactDOM.render(<App />, document.querySelector('.container'))