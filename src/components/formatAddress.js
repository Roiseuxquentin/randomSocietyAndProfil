import React from 'react';

/*==========================================='\ 
||                      .__                  || 
||   ____   ____   ____ |  |   ____   ____   || 
|| _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || 
|| \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || 
||  \___  >\___  >___  /|____/\____/ \____/  || 
||      \/     \/_____/                  2020|| 
\.===========================================*/

const formatAddress = (rue,ville,zip) => {
	let address = []

	if (rue) address.push(rue+",")
	if (ville) address.push(ville)
	if (zip) address.push(zip)

	return address.join(' ')
}

export default formatAddress