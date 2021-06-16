import React from 'react'
import "./style/home.css"
import "./assets/background-universe.jpg"


function ImageList() {

	let list = [
		["Pillars of Creation", "https://img.culturacolectiva.com/cdn-cgi/image/f=auto,w=auto,q=80,fit=contain/content_image/2019/2/15/1550267540135-most-beautiful-photos-of-the-universe-hubble-pillars.jpg"],
		["Dark Galaxy", "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg"],
		["Solar Flare", "https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg"],
		["Solar System", "https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg"],
		["Milk Way", "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg"],
		["Rosette Nebula in Star Clusters", "https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"],
		["Ring Nebula", "https://s1.static.brasilescola.uol.com.br/img/2017/03/nebulosa-anel.jpg"]
	]

	return list
}

class PageBody extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			actualSlide: 0,
			text: ImageList()[0][0],
			image: ImageList()[0][1],
			slidesAmount: ImageList().length
		}

		// this binding is necessary to make `this` work in the callback instead of using arrow fuction (to pass only the class instance)
		//this.changeSlide = this.changeSlide.bind(this)
	}

	changeSlide(change_to) {
		let index = 0

		if (this.state.actualSlide >= (this.state.slidesAmount)-1 && change_to === +1) {
			index = 0
		}
		else if (this.state.actualSlide <= 0 && change_to === -1) {
			index = (this.state.slidesAmount)-1
		}
		else {
			index = (this.state.actualSlide) + change_to
		}

		this.setState(
			{
				actualSlide: index,
				text: ImageList()[index][0],
				image: ImageList()[index][1]
			}
		)
	}

	render() {
		return ( // for functions that need no arguments, use "this.functionName" and for functions that need use "() => this.functionName(arg)"
			<div className="App-body">
				<div class="SlideShow">
					<button class="prev" onClick={() => this.changeSlide(-1)}>&#10094;</button>
					<div class="slide-text">{this.state.text}</div>
					<img class="slide-image" src={this.state.image} alt="universe_image"/>
					<div class="slide-number">{this.state.actualSlide +1} / {this.state.slidesAmount}</div>
					<button class="next" onClick={() => this.changeSlide(+1)}>&#10095;</button>
				</div>
			</div>
		)
	}
}


export { PageBody }
