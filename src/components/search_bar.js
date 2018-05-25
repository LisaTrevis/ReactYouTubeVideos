// import React from 'react';
// Refactored with ES6:
import React, { Component } from 'react';

// This is a functional component, named because it is a literal function:
// const SearchBar = () => {
// 	return <input />; // Same as React.createElement call, so need to import React
// };

// But what I want is a class component, so I'll declare a new class named SearchBar and give it all of the functionality of the React.Component class. Every component that is class based must have a render method and return some JSX (or it will throw an error):
// class SearchBar extends React.Component {
// 	render() {
// 		return <input />;
// 	}
// }
// I can declare a new instance of the SearchBar class with new SearchBar

// Refactored with ES6:
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	render() {
		// Pass event handler into the element that we want to watch for the event, and declare the event handler to trigger whenever the input box content is changed by the user::
		return (
			<div className="search-bar">
				<input // A controlled component because it's receiving it's value from state:
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;











