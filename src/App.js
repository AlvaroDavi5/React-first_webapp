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

import React from 'react'
import { Helmet } from 'react-helmet'
import { PageBody } from "./pages/home.js"
import { PageHeader, PageFooter } from "./components/components.js"
import "./style/App.css"


class InitLayout extends React.Component {
	componentDidMount() {
		document.title = "My React WebApp" // first option
	}
	render() {
		return (
			<Helmet>
				<title>My First React WebApp</title>
			</Helmet>
		) // another option
	}
}


function App() {
	return (
		<div className="App-Main-Page">
			<PageHeader id="component-header"></PageHeader>
			<PageBody/>
			<PageFooter id="component-footer" name="rodape"></PageFooter>
		</div>
	)
}


export { InitLayout, App }
