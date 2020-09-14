import React, {Component} from 'react';
import { AnimateOnChange } from 'react-animation'
import ReactTooltip from 'react-tooltip';

import copyToClipboard from './copyMe.js'
import age from './age.js'

import facebookIcon from '../data/img/facebook.png'
import twitterIcon from '../data/img/twitter.png'
import linkedinIcon from '../data/img/linkedin.png'
import bankIcon from '../data/img/bank.png'

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

class HumanCard extends Component {
  	state = {
  		loaded : false,
		clickJacking : false,
  		more : false,
  		prenom : "",
		genre : "",
		nom : "",
		mail : "",
		date : "",
		ville : "",
		zip : "",
		metier : "",
		phone : "",
		icons: [ {name : "Facebook", src : facebookIcon} ,
				{name : "Twitter", src : twitterIcon} ,
				{name : "Linkedin", src : linkedinIcon} ] ,
		imgBank : "https://www.epictura.fr/"
	}

	componentDidMount() {
		if (this.props.profils) this.loader()
	}
	componentDidUpdate() {
		if (this.props.profils[0].prenom != this.state.prenom) this.loader()
		document.getElementById("tof").classList.add("rotate")
	}

	openUrl(e) {
		let url 

		switch (e.target.id) {
			case "Facebook" :
	 			url = "https://fr-fr.facebook.com/r.php?locale=fr_FR&display=page"
				break;
			case "Twitter" :
	 			url = "https://twitter.com/i/flow/signup"
				break;
			case "Linkedin" :
	 			url = "https://www.linkedin.com/signup/"
				break;
			case "Bank" :
				(this.state.genre == "Masculin")
				? url = "https://www.epictura.fr/search?keyword=profil+man&order=5&orientation=&imagesize=s&color=&categories=&username=&media_type=0&editorial=&gender=male&race=&age=&nudity=0"
				: url = "https://www.epictura.fr/search?age=&categories=&color=&editorial=&gender=female&imagesize=s&keyword=profil%20woman&media_type=0&nudity=0&orientation=&race=&username=&order=5"
				break;
			default :
				console.clear()
		}

	    window.open(url,'_blank')
		return
	}


	loader() {
		setTimeout(() => document.getElementById("tof").classList.remove("rotate"), 400 )
		setTimeout(() => document.getElementById("moulinette").classList.remove("coucou") , 1000)

		if (this.props.profils[0].prenom != this.state.prenom)  {
			let url

			(this.props.profils[0].genre == "Féminin")
			? url = "https://www.flaticon.com/svg/static/icons/svg/727/727393.svg"
			: url = "https://www.flaticon.com/svg/static/icons/svg/727/727399.svg"
			
			const NomFormater = this.props.profils[0].nom[0].toUpperCase() + this.props.profils[0].nom.substring(1)
			const dateSplitted = this.props.profils[0].date.split("/")
			const ageCalculated = age(dateSplitted[1],dateSplitted[0],dateSplitted[2])
			this.setState({ 
					loaded : this.props.bool,
					img : url,
					nom : NomFormater,
					prenom : this.props.profils[0].prenom,
					phone : this.props.profils[0].phone,
					genre : this.props.profils[0].genre,
					date : this.props.profils[0].date,
					age : ageCalculated,
					mail : this.props.profils[0].mail,
					ville : this.props.profils[0].ville,
					zip : String(this.props.profils[0].zip),
					metier : this.props.profils[0].metier ,
					imgBank : "https://www.epictura.fr/" })
		}
	}

	preventClickJacking(e) {
		e.preventDefault()
		clearTimeout(this.timeout);

		if (!this.state.clickJacking) {
		  this.setState({clickJacking : true})
		}
		this.timeout = setTimeout(() => this.setState({clickJacking : false}), 1000)
	}

	more(e) {
		if (!this.state.clickJacking) this.setState({more : !this.state.more})
	}

	render() {
		const display = this.state.more 
	    if (this.props.bool) {
		    return ( <div className="card">
        			    <ReactTooltip />

	    				<div className="profilTofContainer center" >
		    				<AnimateOnChange>
			    				<img className={display ? "profilIconBank" : "hide profilIconBank"} data-tip="depot de photos" 
		    						onClick={(e) => this.openUrl(e)} id="Bank" src={bankIcon} alt="bank profil photo" />
		    				</AnimateOnChange>
		    				<img className="profilTof center finger"
		    						onClick={(e) => this.more(e)} onDoubleClick={(e) => this.preventClickJacking(e)}
		    						id="tof" src={this.state.img} alt=""  />
		    			</div>
		    			<div className="profilInfoNatif">
	    					<h2 className="profilName" >
	    						<span onClick={(event)=> copyToClipboard(this.state.nom) } data-tip="copier"
	    								className="nom">{this.state.nom}</span> ,
	    						<span onClick={(event)=> copyToClipboard(this.state.prenom) } data-tip="copier"
	    								className="prenom">{this.state.prenom}</span>
    						</h2>
			    				<div>
					    			<h3 className={(display ) ? "age" : "invisible"}>{this.state.age} ans</h3>
					    			<h3 onClick={(event)=> copyToClipboard(this.state.date) } data-tip="copier"
					    					className={(display ) ? "invisible" : ""}>{this.state.date}</h3>
					    			<p onClick={(event)=> copyToClipboard(this.state.ville) } data-tip="copier"
				    					className={(display ) ? "city" : "invisible"}>{this.state.ville} 
				    					<span onClick={(event)=> copyToClipboard(this.state.zip) } >{this.state.zip}</span></p>
					    			<h4 onClick={(event)=> copyToClipboard(this.state.metier) } data-tip="copier"
				    					className={(display ) ? "invisible" : "metier"}>{this.state.metier}</h4>
					    			<p onClick={(event)=> copyToClipboard(this.state.mail) } data-tip="copier"
				    					className={(display ) ? "invisible" : "contact"}>{this.state.mail} 
				    					<span onClick={(event)=> copyToClipboard(this.state.phone) } data-tip="copier" >{this.state.phone}</span></p>
			    				</div>	
		    			</div>
	    				<AnimateOnChange>
	    					<div className="profilIconContainer">
			    				{ this.state.icons.map((icon,i) => <img id={icon.name} 
			    													className={(display) ? "profilIcon" : "invisible"} 
		    														onClick={(e) => this.openUrl(e)}
		    														key={i}
		    														data-tip={icon.name}
		    														src={icon.src} alt={icon.name} /> )}
		    				</div>
	    				</AnimateOnChange>
					 </div> )
	    } else {
	    	return <div />
	    }
	}
}

export default HumanCard
