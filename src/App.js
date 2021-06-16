import React from 'react'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PageBody } from "./pages/home.js"
import { PageHeader, PageFooter } from "./pages/components/components.jsx"
import "./style/App.css"


class InitLayout extends React.Component {
	componentDidMount() {
		document.title = "My React WebApp" // first option
	}
	render() {
		return (
			<Helmet>
				<title>Universe Photos</title>
			</Helmet>
		) // another option
	}
}


function App() {
	return (
		<div className="App-Main-Page">
			<PageHeader id="component-header"></PageHeader>
			<PageBody/>
			<PageFooter id="component-footer" refreshDate={new Date()}></PageFooter>
		</div>
	)
}


export { InitLayout, App }

/*
				JSX code format (JS + XML)
				But it can be converted to JS code using the React.div library.


	------------ JSX Sample: --------------------------

		<div id="some-div">
			<h1>Hii</h1>
			<a href="google.com">click here</a>
		</div>

	------------ JS with React lib sample: ------------

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


	------------ Using ES5 to render component --------

		function MyDiv(props) {
			return <div>Hello, {props.name}!</div>
		}

	------------ Using ES6 ----------------------------

		class MyDiv extends React.Component {
			render() {
				return (
					<div>
						Hello, {props.name}!
					</div>
				)
			}
		}


*/
