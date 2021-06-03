import React from 'react'
import "../style/components.css"
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


// use sample: <PageFooter id="rodape"/></PageFooter>
class PageFooter extends React.Component {
	render() {
		return (
			<footer className="App-components" id={this.props.id}>
				<h1>My name: {this.props.name}</h1>
			</footer>
		)
	}
}


export { PageHeader, PageFooter }
