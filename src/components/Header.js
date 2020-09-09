import React, {Component} from 'react';

import '../styles/header.css';

// ################################################### 
// #*/=============================================\*# 
// # ||                      .__                  || #
// # ||   ____   ____   ____ |  |   ____   ____   || #
// # || _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || #
// # || \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || #
// # ||  \___  >\___  >___  /|____/\____/ \____/  || #
// # ||      \/     \/_____/                  2020|| #
// #.\=============================================/.#
// ###################################################

let scrollPosition = 0

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pages : ["tva" ,"siret" ,"taxe Number", "RCI" ],
			mode : false,
			current : "siret"
		}
	}

	componentDidMount() {
		setTimeout(() => this.hidden() , 2000)
	}

	hidden() {
		if (this.state.current) {
			document.getElementById("header").style.opacity = 0
			document.getElementById("header").style.height = "25px"
			document.getElementById("downHeader").style.opacity = 1

		}
	}

	display() {
		document.getElementById("header").style.opacity = 1
		document.getElementById("header").style.height = "130px"
		document.getElementById("downHeader").style.opacity = 0
	}

	changePage(event) {
		const current = event.target.id
		const selected = document.getElementById(current)
		this.state.pages.forEach(page => {
			const other = document.getElementById(page)
			if (page != current) {
				other.style.border = "none"
			} else {
				selected.style.borderBottom = "solid 2px #c1c1c1"
			}
		})
		
		// this.props.onChange(event)
		this.setState({current : current})
		
		scrollPosition = 0
 		window.scroll(0, 0)
	}

	render() {
		return (<div>
					<img src="https://image.flaticon.com/icons/svg/566/566015.svg" id="downHeader" />
					<div className="header" id="header" 
							onMouseEnter={ () => this.display() } 
							onMouseLeave={ () => this.hidden()  } >
							

					  		{ 	this.state.pages.map((page,index) => <h1 id={page} 
																		key={index}
																		className={(page == this.state.current) ? "selectedNb" : ""}
																		onClick={(event) => this.changePage(event)} >{page.toUpperCase()}</h1>) }
					 	</div>
			 	</div>)
	}
}

export default Header;