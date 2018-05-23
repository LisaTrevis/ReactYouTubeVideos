import React from 'react';
import ReactDOM from 'react-dom';

// This is the App class, which is like a factory and returns some JSX:
const App = () => {
	return <div>Hi!</div>;
}

// This instance of App takes the generated HTML and renders it to the DOM:
ReactDOM.render(<App />, document.querySelector('.container'))