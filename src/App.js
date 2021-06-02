/*
				JSX code format (JS + XML)
				But it can be converted to JS code using the React.div library.


	------------ JSX Sample: ------------

	<div>
		<h1>Hii</h1>
		<a href="google.com">click here</a>
	</div>

	------------ JS with React lib Sample: ------------

	React.createElement(
		'div',
		null,
		{ id: 'some-div' },
		React.createElement(
			'h1',
			null,
			'Hii'
		),
		React.createElement(
			'a',
			{ href: 'google.com' },
			'click here'
		)
	)

*/

import logo from './assets/logo.svg';
import './style/App.css';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
