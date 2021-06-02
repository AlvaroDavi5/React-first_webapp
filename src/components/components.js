import React from 'react'


// use sample: <pageHeader id="cabecalho"/></pageHeader>
class PageHeader extends React.Component {
	render() {
		return (
			<header className="App-header">
				<h1>My id: {this.props.id}</h1>
			</header>
		)
	}
}


class PageFooter extends React.Component {
	render() {
		return (
			<footer className="App-footer">
				<h1>My id: {this.props.id}</h1>
			</footer>
		)
	}
}


export { PageHeader, PageFooter }
