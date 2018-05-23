// Imported libraries do not need a relative file path:
import React from 'react';
import ReactDOM from 'react-dom';

// Files I've created myself DO need a relative file path:
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDC0O0NP3IaD2dQesQWt-7J6IBVqjlQZH0';

// This is the App class, which is like a factory and returns some JSX:
const App = () => {
	// Multiline JSX is usually written inside of parens:
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// This instance of App takes the generated HTML and renders it to the DOM:
ReactDOM.render(<App />, document.querySelector('.container'))