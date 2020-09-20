import React from 'react'
import { AnimateOnChange } from 'react-animation'

import Lycos from './Lycos.js'

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

const Image = ({page,bool,action, stopIt, nb, city, zip}) => {

	const openINSEE = (e) => {
		e.preventDefault()
		const url = `https://www.openstreetmap.org/search?query=${zip}`
		window.open(url,'_blank')
	}

	if (page == "siret") {
		
	    return (<div className="displayHover">
		    		<svg className={(bool) ? "random fadeIn" : "randomMini coucou"} 
	    				onClick={(e) => action(e)} onDoubleClick={() => (!!stopIt) ? stopIt() : null}
						fill="black" height="48" viewBox="0 0 24 24" width="48" id="moulinette"
						xmlns="http://www.w3.org/2000/svg">
				    	<path className="fadeIn" d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
				    	<path className="fadeIn" d="M0 0h24v24H0z" fill="none"/>
					</svg>
			    	{(bool)  
			    		? <p className="aide" >  {nb} entreprises proposèes alèatoirement. Provenance : <span className="finger blueHover" onClick={(e) => openINSEE(e)} >{city}</span>.</p>
			    		: console.log("")}
		    	</div> )

	} else if (page == "profil") {
	    return (<div className="displayHover">
		    		<svg onClick={(event) => action(event)} 
				    		onDoubleClick={() => (!!stopIt) ? stopIt() : null}
							className={(!bool) ? "random fadeIn" : "randomMini coucou"} id="moulinette"
							fill="black" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
			    		<path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
			    		<path d="M0 0h24v24H0z" fill="none"/>
					</svg>

			    	{(!bool)  
			    		? <p className="aide" >Les profils proposees seront fictifs et gènèrès alèatoirement.</p>
			    		: true}

		    	</div> )
	} else {
	    return (<div className="displayHover "><Lycos /></div> )
	    return (<div/>)
	}	
}

export default Image;