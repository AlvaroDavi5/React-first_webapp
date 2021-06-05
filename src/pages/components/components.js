import React from 'react'
import "./style/components.css"
import logo from "../assets/logo.svg"


class PageHeader extends React.Component {
	render() {
		return (
			<header className="App-components" id={this.props.id}>
				<a className="App-link" href="https://reactjs.org">
					<div className="App-logo">
						<img src={logo} id="react-logo" alt="logo"/>
					</div>
				</a>
				<div id="page-title">
					<h1>Universe Photos</h1>
				</div>
			</header>
		)
	}
}


// use sample: <PageFooter id="footer"/></PageFooter>
class PageFooter extends React.Component {
	constructor(props) { // method to construct the class and his attributes
		super(props) // this keyword call functions on a parent's object, calling the constructor method again and passing his properties
		this.state = {
			currentDate: new Date().toLocaleTimeString() // property created like an state
		}
	}

	render() { // empty method to render ReactDOM components using JSX or React methods and classes
		return (
			<footer className="App-components" id={this.props.id}>
				<p>
					Refresh date: <strong>{this.props.refreshDate.toLocaleTimeString()}</strong>.
				</p>
				<br/>
				<p>
					Current date: <strong>{this.state.currentDate}</strong>.
				</p>
			</footer>
		)
	}

	// methods to monitore and controller the component lifecycle
	componentDidMount() {
		this.intervalID = setInterval(
			() => this.tick(),
			1000
		)
	}
	componentWillUnmount() {
		clearInterval(this.intervalID)
	}

	tick() {
		this.setState(
			{
				currentDate: new Date().toLocaleTimeString() // dinamically change the property state
			}
		)
	}
}


export { PageHeader, PageFooter }
