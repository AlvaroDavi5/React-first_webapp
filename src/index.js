// default libraries to user React components and render React Doc. Obj. Model
import React from 'react'
import ReactDOM from 'react-dom'
// modules
import { InitLayout, App } from "./App"
import reportWebVitals from "./reportWebVitals.ts"
// another sources
import "./style/index.css"


// rendering HTML Document Object Model using React framework
ReactDOM.render(
	<React.StrictMode>
		<InitLayout/>
		<App/>
	</React.StrictMode>,
	document.getElementById("root") // referencing root directory
)


/*
	if you want to start measuring performance in your app, pass a function
	to log results (for example: reportWebVitals(console.log))
	or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
*/
reportWebVitals(console.log)
